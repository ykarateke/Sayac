import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Uygulama açıldığında kaydedilen sayacı getir
    const loadCount = async () => {
      try {
        const storedCount = await AsyncStorage.getItem('counter');
        if (storedCount !== null) {
          setCount(parseInt(storedCount));
        }
      } catch (error) {
        console.error("Sayaç yüklenirken hata oluştu:", error);
      }
    };

    loadCount();
  }, []);

  useEffect(() => {
    // Sayacın değeri her değiştiğinde onu kaydet
    const saveCount = async () => {
      try {
        await AsyncStorage.setItem('counter', count.toString());
      } catch (error) {
        console.error("Sayaç kaydedilirken hata oluştu:", error);
      }
    };

    saveCount();
  }, [count]);

  const resetCounter = async () => {
    try {
      await AsyncStorage.setItem('counter', '0');
      setCount(0);
    } catch (error) {
      console.error("Sayaç sıfırlanırken hata oluştu:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Sayaç: {count}</Text>
      <Button title="Arttır" onPress={() => setCount(count + 1)} />
      <Button title="Sıfırla" onPress={resetCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 32,
    marginBottom: 20,
  },
});

export default CounterApp;
