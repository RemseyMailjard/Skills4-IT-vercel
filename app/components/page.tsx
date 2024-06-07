"use client";
import {
  CustomCheckbox,
  CustomCircularProgress,
  CustomDivider,
  CustomIconButton,
  CustomInput,
  CustomLink,
  CustomLinkButton,
  CustomLoader,
  CustomLoadingButton,
  CustomNavLink,
  CustomRadio,
  CustomSelect,
  SuccessNotification,
} from "@/components/common";
import { FileOpenRounded } from "@mui/icons-material";

export default function page() {
  return (
    <div>
      <CustomLoadingButton onClick={() => SuccessNotification("heyyyyy", "hi")}>
        Heyy
      </CustomLoadingButton>
      <CustomIconButton>
        <FileOpenRounded />
      </CustomIconButton>
      <CustomCheckbox title="Heyy" />
      <CustomDivider />
      <CustomCircularProgress />
      <CustomInput label="Heyyyyy" placeholder="Enter text" />
      <CustomLink>Hye</CustomLink>
      <CustomLinkButton>Hye</CustomLinkButton>
      <CustomNavLink>Hye</CustomNavLink>
      <CustomLoader />
      <CustomRadio />
      <CustomSelect
        label="Heyyyy"
        options={[{ value: "hey", name: "heyyy" }]}
      />
    </div>
  );
}
