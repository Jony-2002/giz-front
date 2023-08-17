"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { mock_data } from "../data/projects";
import MainSlider from "@/components/MainSlider/MainSlider";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../../../public/images/img_1.jpg";

import { API_KEY } from "@/app/configs/API_KEY";
import { Projectinterface } from "@/app/interfaces/ProjectInterface";
import { useAppSelector } from "@/redux/hooks";
import { useAppDispatch } from "@/redux/hooks";
import { fetchProject } from "@/redux/features/projectsSlice";

export default function SingleProject({
  params,
}: {
  params: { projectID: string };
}) {
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.ProjectsReducer);
  useEffect(() => {
    dispatch(fetchProject());
  }, []);

  const project = state.projects.find(
    (doc: Projectinterface) => doc.project_id == params.projectID
  );
  console.log(project);

  const images = [];

  for (let i = 0; i < mock_data.length; i++) {
    const element = mock_data[i];
    images.push(element);
  }

  return (
    <div>
      <section className="project-container px-28 py-12">
        <div>
          <Image src={project?.banner_url} alt="Project Placeholder image" width={200} height={200} />
        </div>

        <h2 className="text-center uppercase font-semibold mb-3 text-lg text-[#C30F08]">
          {project?.name_en}
        </h2>
        <p>{project?.short_en}</p>
        <div className="flex items-center justify-between slider-container__custom">
          <div className="container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={false}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={
                {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                } as any
              }
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {images.map((image: any) => {
                return (
                  <SwiperSlide key={image.id}>
                    <Image
                      key={image.id}
                      src={image.image.src}
                      // src={slide_image_1}
                      alt="Gallery Item"
                      width={200}
                      height={200}
                      className="image-carousel-custom"
                    // className="object-cover aspect-square"
                    />
                  </SwiperSlide>
                );
              })}
              <div className="swiper-pagination flex justify-center items-center gap-2"></div>
              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow arr-container">
                  <AiOutlineArrowLeft className="arrows" />
                  {/* <div className="w-40 h-40 bg-red-500 rounded-full"></div> */}
                  {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                </div>
                <div className="swiper-button-next slider-arrow">
                  <AiOutlineArrowRight className="arrows" />
                  {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                  {/* <div className="w-40 h-40 bg-red-500 rounded-full"></div> */}
                </div>
              </div>
            </Swiper>
            <div className="slider-container">
              {/* {images.map((image: any, index: number) => {
                return (
                  <div>
                    <Image
                      src={image.src}
                      alt="Gallery Item"
                      width={200}
                      height={200}
                      className={`${index == imageIndex && "active-image"}`}
                    // className="object-cover aspect-square"
                    />
                  </div>
                )
              })} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export async function generateStaticParams() {
//   const data: Projectinterface[] = mock_data;

//   return data.map((project: Projectinterface) => ({
//     projectID: project.project_id.toString()
//   }))
// }