"use client";
import Banner from "@/components/Banner";
import LeftContent from "@/components/detail/LeftContent";
import RightContent from "@/components/detail/RightContent";
import { Project } from "@/interface/project-interface";
import { getProjectDetail } from "@/supabase/projects";
import { Spinner } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export interface DetailData extends Project {
  id: number
}

export default function Detail({ params }: { params: { slug: string } }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DetailData>();
  // const [type] = useState(() => {
  //   switch (params.slug) {
  //     case "4":
  //       return "multi-price";
  //       break;
  //     case "5":
  //       return "purchase-currency";
  //       break;
  //     case "6":
  //       return "fixed-price";
  //       break;
  //     default:
  //       return "normal";
  //   }
  // });
  const [type, setType] = useState<any>("normal");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data: any = await getProjectDetail(params.slug);
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {/* <Banner /> */}
      <div
        className={`container mx-auto flex flex-col md:flex-row gap-6 mt-10 ${
          loading && "justify-center"
        }`}
      >
        {loading || !data ? (
          <Spinner />
        ) : (
          <>
            <div className="flex-1">
              <LeftContent data={data} />
            </div>
            <div className="md:w-[34.2%]">
              <RightContent
                type={type}
                data={data}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
