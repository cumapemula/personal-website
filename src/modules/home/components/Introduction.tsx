"use client";

import React from "react";
import SocialMedia from "@/common/components/elements/SocialMedia";
import useIsMobile from "@/common/hooks/useIsMobile";
import Image from "next/image";
import DownloadResume from "@/common/components/elements/DownloadResume";

export default function Introduction() {
  const isMobile = useIsMobile();
  return (
    <div className="w-full flex flex-wrap-reverse lg:flex-wrap pt-40 pb-12 px-10 bg-slate-950 gap-10 lg:justify-around">
      <div className="flex flex-col lg:w-2/5">
        <h4 className="capitalize text-white bg-orange-700 font-bold text-sm text-center tracking-wide w-32 p-2 rounded">
          welcome! i&apos;m
        </h4>
        <h2 className="capitalize text-white my-4 text-5xl tracking-wide font-bold">
          taufiq adjie sanjaya
        </h2>
        <p className="capitalize text-white mb-8 opacity-50">
          software engineer
        </p>
        <p className="capitalize text-white leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          voluptatem, harum voluptate laboriosam voluptatibus hic modi totam
          explicabo illum accusamus ratione saepe provident maiores voluptates
          labore necessitatibus nisi sequi ullam atque dolor est? Quas cum
          quisquam molestias minus similique aut nostrum culpa nemo veniam quos,
          dolorem saepe illo aliquam voluptatem.
        </p>
        {isMobile && (
          <DownloadResume className="mt-10" />
        )}
      </div>
      <div className="flex gap-40">
        <div className="bg-orange-700 pt-4 ps-6 rounded-t-full rounded-br-full overflow-y-hidden">
          <Image src="/avatar.png" alt="avatar" width={300} height={300} />
        </div>
        {!isMobile && (
          <div className="w-10 hidden lg:inline-block">
            <p className="uppercase vertical-rl text-orange-700 font-bold">
              follow me on
            </p>
            <SocialMedia />
          </div>
        )}
      </div>
    </div>
  );
}
