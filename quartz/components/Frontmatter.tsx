import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { constants } from "node:module"

const FrontmatterList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const filteredKeys = 
    Object.keys(fileData).
      filter(key => {
        return key == "duration" ||
              key == "appliance" ||
              key == "allergens" ||
              key == "veggie_option" ||
              key == "cuisine" ||
              key == "key_ingredients";
      });
  const filteredFM:
      Record<string, any> = {};
  filteredKeys.forEach(key => {
    filteredFM[key] = fileData[key];
  })
  if (filteredFM && filteredFM.length > 0) {
    return (
      <ul class={classNames(displayClass, "tags")}>
        return (
          <li>
            {filteredFM}
          </li>
        )
      </ul>
    )
  } else {
    return null
  }
}

FrontmatterList.css = `
.tags {
  list-style: none;
  display: flex;
  padding-left: 0;
  gap: 0.4rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.section-li > .section > .tags {
  justify-content: flex-end;
}
  
.tags > li {
  display: inline-block;
  white-space: nowrap;
  margin: 0;
  overflow-wrap: normal;
}

a.internal.tag-link {
  border-radius: 8px;
  background-color: var(--highlight);
  padding: 0.2rem 0.4rem;
  margin: 0 0.1rem;
}
`

export default (() => FrontmatterList) satisfies QuartzComponentConstructor
