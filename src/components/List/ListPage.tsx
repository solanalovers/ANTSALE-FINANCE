"use client";
import Banner from "@/components/Banner";
import HomeFilter from "@/components/home/HomeFilter";
import HomeList from "@/components/home/HomeList";
import { getProjectInfoData } from "@/function/project-info";
import { Project, ProjectType } from "@/interface/project-interface";
import { AppContext } from "@/provider/AppProvider";
import { getListProject } from "@/supabase/projects";
import dynamic from "next/dynamic";
import React, { useContext, useEffect, useState } from "react";

export default function ListPageComponent() {
  const [currentList, setCurrentlist] = useState<ProjectType>(
    ProjectType.Presale
  );
  const [listData, setListData] = useState<Array<Project>>([]);
  const [viewData, setViewData] = useState<Array<Project>>([]);
  const [loading, setLoading] = useState(false);
  const { cluster } = useContext(AppContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getListProject();
      if (data) {
        const _data = await Promise.all(
          data.map(async (item) => {
            const { poolAddress, totalRaised } = await getProjectInfoData(
              item.projectType,
              item.id,
              item.hardCap,
              cluster === 1
            );
            return { ...item, poolAddress, totalRaised };
          })
        );
        setListData(_data);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (listData.length > 0) {
      const _data = listData.filter(
        (item: Project) => item.projectType === currentList
      );
      setViewData(_data);
    }
  }, [currentList, listData]);

  return (
    <div>
      {/* <Banner /> */}
      <div className="container mx-auto mt-10">
        <HomeFilter
          currentList={currentList}
          setCurrentList={setCurrentlist}
        />
        <HomeList
          data={viewData}
          loading={loading}
        />
      </div>
    </div>
  );
}
