import { Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailsScreen() {
const { id, query } = useLocalSearchParams<{ id: string; query?: string }>()
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
