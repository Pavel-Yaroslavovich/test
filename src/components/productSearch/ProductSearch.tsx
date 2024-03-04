import { TextField } from "@mui/material";

interface ProductSearchProps {
  valueSearch: string;
  setValueSearch: (value: string) => void;
}

export const ProductSearch = ({
  valueSearch,
  setValueSearch,
}: ProductSearchProps) => {
  return (
    <div style={{ width: "760px", margin: "0 auto" }}>
      <TextField
        sx={{
          marginY: 6,
        }}
        fullWidth
        label="Поиск"
        value={valueSearch}
        onChange={(event) => setValueSearch(event.target.value)}
      />
    </div>
  );
};
