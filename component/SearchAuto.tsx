import React from "react";
import { Autocomplete, } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

export default function SearchAuto() {
  return (
    <div>
      <div className="search-header">
        <Autocomplete
          placeholder="Search"
          rightSection={
            <div className="icon-search-top-header"><IconSearch size={18} stroke={4} /></div>
          }
          data={[
            "Versace",
            "YSL",
            "Gucci",
            "Dior",
            "Luôn Vui tươi",
            "Svelte",
            "Blitz.js",
          ]}
        />
      </div>
    </div>
  );
}
