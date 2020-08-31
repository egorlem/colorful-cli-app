import { store } from "../../redux/store";
import { Select } from "../global/select/select";

console.log(store.getState());
const psone = new Select("div.psone-el", {
  placeholder: "выбери элемент",
  selectedId: 4,
  data: [
    { id: 1, value: 'The date in "Weekday Month Date" format' },
    { id: 2, value: "The version of shell" },
    { id: 3, value: "The name of the shell" },
    { id: 4, value: "The basename of the current directory" },
  ],
  onSelect(item) {
    console.log(item);
  },
});
