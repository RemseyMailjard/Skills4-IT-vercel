import IndexLayout from "@/components/layout/index/IndexLayout";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <IndexLayout>{children}</IndexLayout>;
}
