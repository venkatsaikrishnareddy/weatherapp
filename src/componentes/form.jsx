import React from "react";
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

function Form() {
  return (
    <form>
      <input type="text" placeholder="Cidade" />
      <button>Buscar</button>
      <div>
        <WiDaySunny />
        <WiCloud />
        <WiRain />
      </div>
    </form>
  );
}
export default Form;
