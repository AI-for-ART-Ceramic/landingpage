import { cn } from "@/lib/utils";

export function ConversationPath({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 900 180"
      fill="none"
      aria-hidden="true"
      className={cn("conversation-path", flip && "-scale-x-100", className)}
    >
      <path
        data-gsap-path
        d="M10 103C126 5 216 178 348 83C463 0 529 158 650 81C744 21 805 53 890 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="102" r="6" fill="currentColor" />
      <circle cx="888" cy="17" r="6" fill="currentColor" />
    </svg>
  );
}

export function CeramicMark({
  className,
  variant = "vase",
}: {
  className?: string;
  variant?: "vase" | "urn" | "tall" | "bowl" | "cup";
}) {
  const shapes = {
    vase:
      "M76 18H124C122 47 133 60 150 77C166 94 173 119 165 143C156 169 133 181 100 181C67 181 44 169 35 143C27 119 34 94 50 77C67 60 78 47 76 18Z",
    bowl:
      "M27 74C34 135 57 169 100 169C143 169 166 135 173 74C139 88 61 88 27 74Z",
    cup:
      "M48 48C51 117 62 161 106 161C148 161 159 121 160 56C128 69 81 67 48 48Z",
    urn:
      "M70 22H130C127 48 143 62 158 80C177 103 177 136 160 158C145 177 124 183 100 183C76 183 55 177 40 158C23 136 23 103 42 80C57 62 73 48 70 22Z",
    tall:
      "M72 18H128C125 54 135 67 145 84C158 106 158 143 146 166C137 183 121 188 100 188C79 188 63 183 54 166C42 143 42 106 55 84C65 67 75 54 72 18Z",
  };

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      data-ceramic-variant={variant}
      className={cn("ceramic-mark", className)}
    >
      {variant === "vase" && (
        <>
          <path
            data-ceramic-part="body"
            d={shapes.vase}
            fill="currentColor"
          />
          <path
            data-ceramic-part="neck"
            d="M76 18H124C123 32 125 43 129 53H71C75 43 77 32 76 18Z"
            fill="currentColor"
          />
          <path data-ceramic-part="highlight" d="M77 24C75 63 49 83 47 118C45 145 59 163 82 171C63 140 66 100 84 74C94 58 96 39 94 20H76Z" fill="var(--paper)" fillOpacity=".16" />
          <path data-ceramic-part="band" d="M49 87C78 101 122 101 151 84" stroke="var(--paper)" strokeOpacity=".92" strokeWidth="3" strokeLinecap="round" />
          <path d="M37 122C70 137 126 137 164 117" stroke="var(--paper)" strokeOpacity=".88" strokeWidth="3" strokeLinecap="round" />
          <path d="M53 153C82 164 119 165 147 151" stroke="var(--paper)" strokeOpacity=".7" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {variant === "urn" && (
        <>
          <path data-ceramic-part="body" d={shapes.urn} fill="currentColor" />
          <path data-ceramic-part="highlight" d="M70 25C70 61 48 78 43 110C39 141 53 164 78 174C62 143 68 107 86 82C96 67 99 44 96 21H70Z" fill="var(--paper)" fillOpacity=".15" />
          <path data-ceramic-part="band" d="M42 87C76 103 126 103 158 84" stroke="var(--paper)" strokeOpacity=".9" strokeWidth="3" strokeLinecap="round" />
          <path d="M31 125C67 141 133 141 169 121" stroke="var(--paper)" strokeOpacity=".76" strokeWidth="3" strokeLinecap="round" />
          <path d="M46 158C78 171 122 172 154 157" stroke="var(--paper)" strokeOpacity=".58" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {variant === "tall" && (
        <>
          <path data-ceramic-part="body" d={shapes.tall} fill="currentColor" />
          <path data-ceramic-part="highlight" d="M73 21C72 57 61 72 53 97C45 130 54 164 74 178C62 143 69 112 82 88C94 65 97 39 94 18H72Z" fill="var(--paper)" fillOpacity=".15" />
          <path data-ceramic-part="band" d="M57 86C77 97 120 98 144 83" stroke="var(--paper)" strokeOpacity=".9" strokeWidth="3" strokeLinecap="round" />
          <path d="M48 123C77 136 124 137 153 121" stroke="var(--paper)" strokeOpacity=".76" strokeWidth="3" strokeLinecap="round" />
          <path d="M54 159C82 172 118 172 146 158" stroke="var(--paper)" strokeOpacity=".58" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {variant === "bowl" && (
        <>
          <path
            data-ceramic-part="body"
            d={shapes.bowl}
            fill="currentColor"
          />
          <ellipse data-ceramic-part="rim" cx="100" cy="73" rx="73" ry="18" fill="var(--paper)" fillOpacity=".9" />
          <ellipse cx="100" cy="73" rx="57" ry="10" fill="currentColor" fillOpacity=".22" />
          <path d="M42 109C74 122 128 122 159 108" stroke="var(--paper)" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
          <path d="M56 140C81 151 120 151 145 139" stroke="var(--paper)" strokeOpacity=".6" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      {variant === "cup" && (
        <>
          <path
            data-ceramic-part="body"
            d={shapes.cup}
            fill="currentColor"
          />
          <ellipse data-ceramic-part="rim" cx="105" cy="54" rx="55" ry="15" fill="var(--paper)" fillOpacity=".92" />
          <ellipse cx="105" cy="54" rx="42" ry="9" fill="currentColor" fillOpacity=".24" />
          <path data-ceramic-part="handle" d="M158 77C190 76 190 129 159 130" stroke="var(--paper)" strokeWidth="7" strokeLinecap="round" />
          <path d="M68 109C88 120 124 121 148 109" stroke="var(--paper)" strokeOpacity=".75" strokeWidth="2.5" />
        </>
      )}
    </svg>
  );
}

export function InsightRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      fill="none"
      aria-hidden="true"
      className={cn("insight-ring", className)}
    >
      <circle
        cx="110"
        cy="110"
        r="82"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 10"
      />
      <circle
        cx="110"
        cy="110"
        r="61"
        stroke="currentColor"
        strokeOpacity=".35"
      />
      <circle cx="110" cy="28" r="7" fill="var(--secondary)" />
      <circle cx="42" cy="155" r="5" fill="var(--accent)" />
      <circle cx="176" cy="158" r="5" fill="var(--primary)" />
    </svg>
  );
}
