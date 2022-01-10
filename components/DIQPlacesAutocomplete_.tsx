import React from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Box, MenuItem, Popper, TextField } from '@mui/material'
import ClickAwayListener from '@mui/base'

interface DIQPlacesAutocompleteProps {
  apiKey: string
}

const DIQPlacesAutocomplete = ({ apiKey }: DIQPlacesAutocompleteProps) => {
  const [scriptLoading, setScriptLoading] = React.useState(false)
  const [scriptLoaded, setScriptLoaded] = React.useState(false)
  const [address, setAddress] = React.useState('')
  const [popperAble, setPopperAble] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const loader = new Loader({
    apiKey,
    version: 'weekly',
    libraries: ['drawing', 'geometry', 'places', 'visualization'],
  })

  React.useEffect(() => {
    if (scriptLoaded) return
    if (scriptLoading) return

    loader
      .load()
      .then(() => setScriptLoaded(true))
      .catch((e) => {
        console.error(e)
      })

    setScriptLoading(true)
  })

  const handlePlacesChange = (address) => {
    setAddress(address)
  }

  const handlePlacesSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .catch((error) => console.error('Error', error))
  }

  const highlightSuggestion = (suggestion: any) => {
    const result =
      suggestion.indexOf(address) < 0 ? (
        suggestion
      ) : (
        <span>
          {suggestion.slice(0, suggestion.indexOf(address))}
          <span style={{ fontWeight: 'bold' }}>{address}</span>
          {suggestion.slice(suggestion.indexOf(address) + address.length)}
        </span>
      )
    return result
  }

  if (!scriptLoaded) {
    return <TextField label='Property address' sx={{ width: 1, height: 1 }} />
  }
  return (
    <PlacesAutocomplete
      value={address}
      searchOptions={{
        types: ['address'],
        componentRestrictions: { country: 'us' },
      }}
      onChange={handlePlacesChange}
      onSelect={handlePlacesSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        return (
          <>
            <TextField
              autoFocus
              fullWidth
              {...getInputProps()}
              placeholder='address'
              onClick={(e) => {
                e.preventDefault()
                setPopperAble(true)
                setAnchorEl(e.currentTarget)
              }}
            />
            {popperAble && !loading && suggestions.length > 0 && (
              <Popper
                open
                placement='bottom'
                anchorEl={anchorEl}
                style={{ zIndex: 10000, left: anchorEl?.clientLeft, width: anchorEl?.clientWidth }}
              >
                <Box width={1} bgcolor='rgba(255, 255, 255, 1)' zIndex={10001} border={1}>
                  {suggestions.map((item, index) => {
                    return (
                      <MenuItem key={index} {...getSuggestionItemProps(item)}>
                        {highlightSuggestion(item.description)}
                      </MenuItem>
                    )
                  })}
                </Box>
              </Popper>
            )}
          </>
        )
      }}
    </PlacesAutocomplete>
  )
}

export default DIQPlacesAutocomplete
