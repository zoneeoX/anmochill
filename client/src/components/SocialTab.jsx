import React from "react";
import { motion } from "framer-motion";
import axios from "axios";

const SocialTab = () => {
    



  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      exit={{ y: -1000 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col overflow-y-scroll overflow-x-hidden gap-10 font-josef absolute bg-slate-800 w-screen h-screen top-0 left-0 -z-10"
    ></motion.div>
  );
};

export default SocialTab;
