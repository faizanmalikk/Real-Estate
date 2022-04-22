import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Flex, Text, Button, Icon, Input, Spinner, Select } from '@chakra-ui/react'
import { filterData, getFilterValues } from '../../Utils/filterData'

const SearchFilters = () => {
  const [filters, setfilters] = useState(filterData)
  const router = useRouter();
  const searchFilters = (filterValues) => {
     const path = router.pathname;
     const {query} = router;
     const values = getFilterValues(filterValues)
     values.forEach((item)=>{
     if(item.value && filterValues[item.name]){
       query[item.name] = item.value
     }
     })
     router.push({pathname : path ,query})
  }

  return (
    <Flex bg={'gray.100'} p='4' justifyContent={'center'} flexWrap='wrap'>
      {filters.map((filter, i) => (
        <Box key={i}>
          <Select
            placeholder={filter.placeholder}
            p='2'
            w={'fit-content'}
            onChange={(e) => searchFilters({ [filter.queryName]: e.target.value })}
          >
        {filter.items.map((item,i)=>(
          <option value={item.value} key={i}> {item.name} </option>
        ))}

          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters