"use client";
import Banner from "@/components/Banner";
import LeftContent from "@/components/detail/LeftContent";
import RightContent from "@/components/detail/RightContent";
import {getProjectInfoData} from "@/function/project-info";
import {Project} from "@/interface/project-interface";
import {AppContext} from "@/provider/AppProvider";
import {getProjectDetail} from "@/supabase/projects";
import {Spinner} from "@nextui-org/react";
import React, {useContext, useEffect, useState} from "react";

export interface DetailData extends Project {
    id: String;
}

export default function Detail({params}: { params: { slug: string } }) {
    const {cluster} = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<DetailData>();
    const [type, setType] = useState<any>("normal");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data: any = await getProjectDetail(params.slug);
            const {poolAddress, totalRaised} =
                await getProjectInfoData(
                    data.projectType,
                    data.id,
                    data.hardCap,
                    cluster === 1
                );
            console.log({poolAddress, totalRaised});
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
                    <Spinner/>
                ) : (
                    <>
                        <div className="flex-1">
                            <LeftContent data={data}/>
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
