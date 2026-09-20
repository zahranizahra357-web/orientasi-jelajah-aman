import { StyleSheet, Text, View } from "react-native";
import type { LaporanUdara } from "../../types/cuaca";

interface IndikatorAQIProps {
  data: LaporanUdara;
}

export default function IndikatorAQI({ data }: IndikatorAQIProps) {
  let warna = "#22c55e";

  if (data.tingkat === "SEDANG") {
    warna = "#eab308";
  } else if (data.tingkat === "TIDAK_SEHAT") {
    warna = "#f97316";
  } else if (data.tingkat === "BERBAHAYA") {
    warna = "#ef4444";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Kualitas Udara</Text>

      <Text style={styles.kota}>{data.kota}</Text>

      <Text style={styles.aqi}>
        AQI: {data.indeksAQI}
      </Text>

      <Text style={[styles.tingkat, { color: warna }]}>
        {data.tingkat}
      </Text>

      {data.diperbaruiPada && (
        <Text style={styles.waktu}>
          Diperbarui: {data.diperbaruiPada}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,
    backgroundColor: "#f5f5f5",
  },

  judul: {
    fontSize: 18,
    fontWeight: "bold",
  },

  kota: {
    fontSize: 16,
    marginTop: 5,
  },

  aqi: {
    fontSize: 16,
    marginTop: 5,
  },

  tingkat: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },

  waktu: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});