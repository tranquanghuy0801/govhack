import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 200,
    },
    menuItem: {
      "& .MuiMenuItem-root	": {
        "&:hover": {
          background: "black",
        },
      },
    },
    noLabel: {
      marginTop: theme.spacing(1.5),
    },
  })
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const names = [
  "Calculate the square footage of a new home under construction based on plans using scales and ratios",
  "Use software on a portable device to document a building inspection by recording measurements, checking compliance and uploading photos",
  "Share knowledge, experience, information and resources with others as an integral part of work relationships",
  "Write a detailed literature review",
  "Read and analyse information comparing the impact of downturns in the global economy on the cost of producing and selling beef",
  "Develop and implement a new business strategy based on changing market conditions",
  "Examine records and data to investigate and prosecute corporate criminals",
  "Explain foot care procedures to a diabetic patient",
  "Prioritise and plan multiple complex tasks several months ahead",
  "Collaborate with others to prepare and perform artistic productions",
  "Create charts and graphs to accurately convey the results of a customer satisfaction survey",
  "Use software on a portable device to document a building inspection by recording measurements, checking compliance and uploading photos",
  "Share knowledge, experience, information and resources with others as an integral part of work relationships",
  "Write a detailed literature review",
  "Read a book on leading and managing change in the workplace",
  "Determine the impact of new menu changes on a restaurant's purchasing requirements",
  "Redesign a floor layout to take advantage of new manufacturing techniques",
  "Participate in a work meeting and ask appropriate follow up questions ",
  "Develop a program of multiple live musical performances, special events and sports carnivals throughout the year at a sports club venue and coordinate volunteers, staff and contractors to deliver the events",
  "Negotiate a price and sales terms then prepare a contract for a house",
  "Calculate the square footage of a new home under construction based on plans using scales and ratios",
  "Recognise different ways to connect to the internet (e.g. Bluetooth, Wi-Fi, hotspot)",
  "Recognise and avoid behaviours, like unkind gossip, that undermine effective group interaction",
  "Write a memo to staff outlining new directives",
  "Read a memo from management describing new personnel policies",
  "Determine the impact of new menu changes on a restaurant's purchasing requirements",
  "Redesign a floor layout to take advantage of new manufacturing techniques",
  "Give instructions to a lost driver",
  "Prioritise and plan multiple complex tasks several months ahead",
  "Negotiate a price and sales terms then prepare a contract for a house",
  "Calculate the square footage of a new home under construction based on plans using scales and ratios",
  "Recognise different ways to connect to the internet (e.g. Bluetooth, Wi-Fi, hotspot)"
];

const Dropdown: React.FC<any> = ({ handleChange, value }) => {
  const classes = useStyles();

  return (
    <div>
      <TextField select style={{ width: 150, marginTop: 12, marginLeft: 12 }}>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default Dropdown;
