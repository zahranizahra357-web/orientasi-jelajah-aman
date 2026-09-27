import { View, Text } from "react-native";
import { typeScale, spacing } from "../../constants/styles";

export default function Tentang() {
  return (
    <View style={{ padding: spacing.besar, gap: spacing.sedang }}>
      <Text
        accessibilityLabel="Judul halaman Tentang"
        style={{ fontSize: typeScale.judul }}
      >
        Tentang Aplikasi
      </Text>

      <Text style={{ fontSize: typeScale.isi }}>
        Nama Aplikasi: Orientasi Jelajah Aman
      </Text>

      <Text style={{ fontSize: typeScale.isi }}>
        Versi: 1.0.0
      </Text>

      <Text style={{ fontSize: typeScale.isi }}>
        Pembuat: Zahra
      </Text>
    </View>
  );
}