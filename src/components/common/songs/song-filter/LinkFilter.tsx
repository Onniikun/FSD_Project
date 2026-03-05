import "./link-filter.css"
import Select from 'react-select'
import makeAnimated from "react-select/animated"
import { LinkList } from "../../../../apis/SongItemLinkData"

// isMulti parameter selection interface.
type LinkOption = {
  value: string
  label: string
}

type LinkFilterProps = {
  onChange: (platform: string[]) => void
}
/**
 * Filters songs by their available listening platforms
 * @param onChange - Callback when the platform display is changed.
 * @returns - Filtered song.
 */
export function LinksFilter({ onChange }: LinkFilterProps) {
    
  const animated = makeAnimated()
  // reference: https://stackoverflow.com/questions/63696310/how-to-use-typescript-with-the-definition-of-custom-styles-for-a-select-using-re
  /**
   * Since isMulit select is from the react library it doesnt work in the same way 
   * as the other components. So we have to insert our colour styles here.
   */
  const selectStyles = {
    control: (base: any) => ({ 
      ...base,
      backgroundColor: "#242424",
      color: "#FFFFFF",
      fontSize: "16px"
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "#242424",
      color: "#FFFFFF",
      fontSize: "16px"
    }),
    option: (base: any) => ({
      ...base,
      backgroundColor: "#242424",
      color: "#FFFFFF",
      fontSize: "16px"
    }),
    singleValue: (base: any) => ({
    ...base,
    color: "#FFFFFF"
    }),

    input: (base: any) => ({
      ...base,
      color: "#FFFFFF"
    }),

    placeholder: (base: any) => ({
      ...base,
      color: "#BBBBBB"
    })
  }

  return (
    <div>
      <Select<LinkOption, true>
        inputId="platform-select"
        aria-label="Select music platforms"
        className="Link-filter"
        styles={selectStyles}
        isMulti
        components={animated}
        placeholder="Where do you want to play?"
        options={LinkList}
        onChange={(selected) =>
          onChange(
            selected ? selected.map(option => option.value) : []
          )
        }
      />
    </div>
  )
}