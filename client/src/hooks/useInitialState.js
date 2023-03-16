import React, { useState } from "react";

export default function useInitialState() {
  const [proyects, setProyects] = useState([]);

  return { proyects, setProyects };
}
