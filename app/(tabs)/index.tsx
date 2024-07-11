import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { WebView } from 'react-native-webview';
import {AlloyStepUp} from '@/components/AlloyStepUp'
export default function HomeScreen() {
  const params = {
    app_token: "",
    journey: "",
    key: "",
    baseurl: ""
  }

  return (
    <AlloyStepUp alloyJourneyApplicationToken={params.app_token} ALLOY_ONBOARDING_JOURNEY_TOKEN={params.journey} ALLOY_SDK_KEY={params.key} baseurl={params.baseurl}/>
  );
}
