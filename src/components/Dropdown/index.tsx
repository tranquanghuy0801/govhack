import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Dropdown: React.FC<any> = ({ handleChange, value }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          displayEmpty
          value={value}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          variant='filled'
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
