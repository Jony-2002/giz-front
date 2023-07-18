"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/ui/select";

// region, village, projects
import { getData } from "@/redux/features/projectsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { FormEvent, useState } from "react";

export default function Filter() {
  const dispatch = useAppDispatch();

  const handleFilter = (value: string) => {
    dispatch(getData(value));
  }

  return (
    <nav className="flex items-center gap-16 px-28 mt-10">
      <p>Filter:</p>
      <section className="flex items-center gap-10">
        <div className="py-5">
          <Select onValueChange={handleFilter}>
            <SelectTrigger className="min-w-[120px] text-black">
              {/* <SelectValue className="text-black" placeholder={"Districs"} /> */}
              <SelectValue className="text-black" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup className="text-black">
                <SelectItem value="All">
                  <div className="text-black">
                    <p>All</p>
                  </div>
                </SelectItem>
                <SelectItem value="Rushon">
                  <div className="text-black">
                    <p>Rushon</p>
                  </div>
                </SelectItem>
                <SelectItem value="Vakhon">
                  <div className="text-black">
                    <p className="w-10">Vakhon</p>
                  </div>
                </SelectItem>
                <SelectItem value="Darvoz">
                  <div className="text-black">
                    <p>Darvoz</p>
                  </div>
                </SelectItem>
                <SelectItem value="Vanj">
                  <div className="text-black">
                    <p>Vanj</p>
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="py-5">
          <input className="border h-[40px] px-2" type="text" placeholder="Search..." />
        </div>
      </section>
    </nav >
  );
}