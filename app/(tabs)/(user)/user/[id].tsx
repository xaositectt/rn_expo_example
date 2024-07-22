import { Text, StyleSheet } from 'react-native';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
const { id, query } = useLocalSearchParams<{ id: string; query?: string }>()
  if (query === 'redirect') {
    return <Redirect href="/" />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>The user id {id}</Text>
      <Text>The query param is {query}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
