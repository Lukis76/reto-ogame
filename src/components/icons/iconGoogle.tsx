import { type IconProps } from "@/types/icon";

export const IconGoogle = (props: IconProps) => (
  <svg
    viewBox="0 0 720 720"
    width={`${props?.size ?? 1.2}rem`}
    height={`${props?.size ?? 1.2}rem`}
    style={{ marginRight: "0.5rem" }}
    {...props}
  >
    <style>{".st0{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}"}</style>

    <g transform="translate(503 415)">
      <path
        id="Combined-Shape"
        d="M209-130A360 360 0 0 1 98 212l-118-95c34-24 61-59 75-98h-196v-149h350z"
        className="st0"
      />
    </g>
    <g transform="translate(133 580)">
      <g id="Combined-Shape_1_">
        <path
          id="path-1_1_"
          d="M227-8c46 0 89-15 123-40l118 95A359 359 0 0 1-94-56l121-94C56-68 135-8 227-8z"
          className="st0"
        />
      </g>
    </g>
    <g transform="translate(88 309)">
      <g id="Combined-Shape_2_">
        <path
          id="path-3_1_"
          d="M-47-116 74-23a210 210 0 0 0-1 146l-121 92a359 359 0 0 1 1-331z"
          className="st0"
        />
      </g>
    </g>
    <g transform="translate(134 88)">
      <g id="Combined-Shape_3_">
        <path
          id="path-5_1_"
          d="M226-88c100 0 190 41 255 106L377 123a211 211 0 0 0-349 75l-121-93A360 360 0 0 1 226-88z"
          className="st0"
        />
      </g>
    </g>
  </svg>
);
