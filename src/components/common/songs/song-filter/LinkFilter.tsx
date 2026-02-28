import Select from 'react-select';
import makeAnimated from "react-select/animated"
import { LinkList } from "../../../../apis/SongItemLinkData"

type linkFilterProps = {
    onChange: (platform: string[]) => void
}

export function LinksFilter({ onChange }: linkFilterProps) {

    const animated = makeAnimated();

    return (
        <Select
            className='Link-fitler'
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
    )
}