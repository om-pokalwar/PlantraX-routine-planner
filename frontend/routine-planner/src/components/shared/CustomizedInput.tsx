import { TextField } from "@mui/material"
import { SxProps } from "@mui/material";

type Props = {
    name: string;
    type: string;
    label: string;
    sx?: SxProps;
};

const CustomisedInput = (props: Props) => {
  return (
    <TextField 
    margin="normal"
    InputLabelProps={{style: {color: "#DEEFE7"}}}
      name={props.name}
      type={props.type}
      label={props.label}
        InputProps={{style: {
            width: "300px", 
            borderRadius: 10, 
            fontSize: 20,
            color: "#DEEFE7",
        }}} 

    />
  );
};

export default CustomisedInput; 