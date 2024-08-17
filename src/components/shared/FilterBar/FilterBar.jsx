import { useState } from "react";
import "./FilterBar.css";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import { Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

function valuetext(value) {
  return `${value}°C`;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FilterBar = () => {
  const [value, setValue] = useState([2000, 4500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="filterbar">
      <div className="filterbarCard">
        <h3>Filter By Price</h3>

        <div className="mt-6">
          <Slider
            min={0}
            step={50}
            max={10000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            // valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
            defaultValue={200}
          />
        </div>

        <div className="flex pb-2 text-green-700 price-range">
          <span>
            From: <strong>${value[0]}</strong>
          </span>
          <span className="ml-auto">
            To: <strong>${value[1]}</strong>
          </span>
        </div>

        <div className="filters">
          <div className="filterByBrand">
            <h5>Brand</h5>
            <ul className="-space-y-3">
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
            </ul>
          </div>

          <div className="filterByColor mt-8">
            <h5>Color</h5>
            <ul className="-space-y-3">
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Fresh (56)
              </li>
            </ul>
          </div>

          <div className="filterByColor mt-8">
            <h5>Item Condition</h5>
            <ul className="-space-y-3">
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                New (206)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Refurbished (56)
              </li>
              <li>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: green[800],
                    },
                  }}
                />
                Used (56)
              </li>
            </ul>
          </div>

          <div className="mt-8 flex gap-5">
            <Button className="bg-flash">
              <FilterAltOutlinedIcon />
              Filter
            </Button>
            <Button className="btn-danger" variant="outline">
              <RestartAltIcon />
              Clear All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
