"use client";

import { Hub } from "@/app/(preview)/actions";
import { GuageIcon, LightningIcon, LockIcon } from "./icons";
import { motion } from "framer-motion";

export const HubView = ({ hub }: { hub: Hub }) => {
  return (
    <div className="flex flex-row gap-2 md:max-w-[468px] max-w-[calc(100dvw-64px)] w-full pb-6">
      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md flex flex-row gap-3 items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="p-2 bg-blue-500 text-blue-50 dark:bg-blue-400 dark:text-blue-800 rounded-md">
          <GuageIcon />
        </div>
        <div>
          <div className="text-xs">Climate</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {`${hub.climate.low}-${hub.climate.high}°C`}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md flex flex-row gap-3 items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="p-2 bg-amber-400 text-amber-50 dark:bg-amber-200 dark:text-amber-800 rounded-md">
          <LightningIcon />
        </div>
        <div>
          <div className="text-xs">Lights</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {`${hub.lights.filter((hub) => hub.status).length}/${
              hub.lights.length
            } On`}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-zinc-100 dark:bg-zinc-800 p-2 rounded-md flex flex-row gap-3 items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="p-2 bg-zinc-700 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900 rounded-md">
          <LockIcon />
        </div>
        <div>
          <div className="text-xs">Security</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {`${hub.locks.filter((hub) => hub.isLocked).length}/${
              hub.locks.length
            } Locked`}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
