import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useLazyQuery } from '@apollo/react-hooks';
import SEARCH_POST from '../graphql/queries/searchPost'
import { useNavigation } from 'react-navigation-hooks';


const Search = () => {
  const [search, setSearch] = useState('');
  const { navigate } = useNavigation()

  const [searchPost, { data, error }] = useLazyQuery(SEARCH_POST, {
    variables: {
      content: `%${search}%`,
      limit: 10,
      offset: 0,
    }
  })

  const handleSearch = async () => {
    await searchPost()
    if (data) {
      navigate({ routeName: 'Search', params: { data: data , key: search} })
    }
  };
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={(val) => setSearch(val)}
      value={search}
      onSubmitEditing={() => handleSearch()}
      inputStyle={{
        borderWidth: 0,
        fontSize: RFPercentage(2),
        height: RFPercentage(2.5),
        minHeight: 10,
        padding: 0,
        margin: 0,
      }}
      inputContainerStyle={{
        borderRadius: 50,
        backgroundColor: '#fff',
        height: RFPercentage(6),
      }}
      containerStyle={{
        padding: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 50,
      }}
    />
  )
}

export default Search;
