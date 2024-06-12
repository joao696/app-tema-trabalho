import React, { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { themeDark, themeLight } from "./src/config/theme";
import { useColorScheme } from "react-native";
// lembre-se de npm install @react-native-async-storage/async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(
    systemTheme === "dark" ? themeDark : themeLight
  );

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme === "dark" ? themeDark : themeLight);
      } else {
        setTheme(systemTheme === "dark" ? themeDark : themeLight);
      }
    };
    console.log("a");

    loadTheme();
  }, [systemTheme]);

  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
};

export default App;
