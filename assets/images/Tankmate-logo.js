import React from 'react';
import Svg, {
    Defs, LinearGradient, Stop, ClipPath,
    Rect, Path, Ellipse, Circle, Text, TSpan, G
} from 'react-native-svg';

export default function TankmateLogo({ width = 300 }) {
    const height = width / 2.5;

    return (
        <Svg
            viewBox="0 0 400 160"
            width={width}
            height={height}
        >
            <Defs>
                <LinearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0" stopColor="#0a1628" stopOpacity="1" />
                    <Stop offset="1" stopColor="#0d2444" stopOpacity="1" />
                </LinearGradient>

                <LinearGradient id="tankGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <Stop offset="0" stopColor="#00d4c8" stopOpacity="0.25" />
                    <Stop offset="1" stopColor="#0077b6" stopOpacity="0.55" />
                </LinearGradient>

                <LinearGradient id="fishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0" stopColor="#00f5d4" stopOpacity="1" />
                    <Stop offset="1" stopColor="#0096c7" stopOpacity="1" />
                </LinearGradient>

                <LinearGradient id="fish2Grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <Stop offset="0" stopColor="#f77f00" stopOpacity="1" />
                    <Stop offset="1" stopColor="#fcbf49" stopOpacity="1" />
                </LinearGradient>

                <ClipPath id="tankClip">
                    <Rect x="14" y="14" width="102" height="102" rx="18" />
                </ClipPath>
            </Defs>

            <Rect x="8" y="8" width="114" height="114" rx="22" fill="url(#bgGrad)" />

            <Rect 
                x="14" y="14" width="102" height="102" rx="18" 
                fill="none" stroke="#00d4c8" strokeWidth="1.5" strokeOpacity="0.4" 
            />

            {/* Su hissəsi */}
            <Rect 
                x="14" y="56" width="102" height="60" 
                fill="url(#tankGrad)" clipPath="url(#tankClip)" 
            />

            {/* Dalğa effekti */}
            <Path 
                d="M14 58 Q35 53 55 58 Q75 63 95 58 Q108 54 116 58"
                fill="none" stroke="#00f5d4" strokeWidth="1.8" strokeOpacity="0.7" 
            />

            {/* Bitkilər */}
            <Path 
                d="M28 116 Q24 95 30 82 Q33 74 28 65"
                fill="none" stroke="#f77f00" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9" 
            />
            <Circle cx="28" cy="63" r="5" fill="#f77f00" opacity="0.85" />

            <Path 
                d="M98 116 Q102 100 97 86 Q94 78 99 70"
                fill="none" stroke="#00c896" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.9" 
            />
            <Circle cx="99" cy="68" r="5" fill="#00c896" opacity="0.85" />

            {/* Balıq 1 */}
            <G transform="translate(65, 80)">
                <Path d="M-20 0 L-30 -10 L-28 0 L-30 10 Z" fill="url(#fishGrad)" opacity="0.85" />
                <Ellipse cx="0" cy="0" rx="18" ry="10" fill="url(#fishGrad)" />
                <Circle cx="12" cy="-2" r="3" fill="white" />
                <Circle cx="13" cy="-2" r="1.8" fill="#0a1628" />
            </G>

            {/* Balıq 2 */}
            <G transform="translate(40, 95)">
                <Path d="M16 0 L24 -7 L22 0 L24 7 Z" fill="url(#fish2Grad)" opacity="0.9" />
                <Ellipse cx="0" cy="0" rx="13" ry="7" fill="url(#fish2Grad)" />
            </G>

            {/* Mətnlər */}
            <Text x="142" y="72" fontSize="42" fontWeight="700" fill="white">Tank</Text>
            <Text x="230" y="72" fontSize="42" fontWeight="400" fill="#00f5d4">mate</Text>
            
            <Text 
                x="143" y="96" fontSize="11" fill="#00d4c8" opacity="0.7" 
                letterSpacing="2"
            >
                YOUR AQUARIUM COMMUNITY
            </Text>
        </Svg>
    );
}