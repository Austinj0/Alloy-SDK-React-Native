import { View,useWindowDimensions} from 'react-native';
import {useSafeAreaInsets } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
interface AlloyStepUpProps {
    alloyJourneyApplicationToken: string,
    ALLOY_SDK_KEY: string,
    ALLOY_ONBOARDING_JOURNEY_TOKEN: string,
    baseurl: string
  }
  export function AlloyStepUp ({ alloyJourneyApplicationToken, ALLOY_SDK_KEY, ALLOY_ONBOARDING_JOURNEY_TOKEN, baseurl }: AlloyStepUpProps) {
    const { top } = useSafeAreaInsets();
    const { width, height } = useWindowDimensions();

    return (
        <View
            style={{
                position: 'absolute',
                flex: 1,
                zIndex: 1,
                top,
            }}
        >
            <WebView
                webviewDebuggingEnabled
                allowsFullscreenVideo={true}
                allowsInlineMediaPlayback={true}
                mediaPlaybackRequiresUserAction={false}
                scrollEnabled={true}
                originWhitelist={['*']}
                containerStyle={{
                    position: 'absolute',
                    zIndex: 1,
                    width,
                    height: height - top,
                }}
                javaScriptEnabled={true}
                onMessage={(event) => {
                    const data = JSON.parse(event.nativeEvent.data);
                    /*do something with data */
               }}
                source={{
                   uri: baseurl + "?&isReactNative=true&journeyApplicationToken="+ alloyJourneyApplicationToken+ "&journeyToken="+ ALLOY_ONBOARDING_JOURNEY_TOKEN + "&key=" + ALLOY_SDK_KEY
                }}
            />
        </View>
    );
};

