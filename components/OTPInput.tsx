import React, { useState, useRef, RefObject } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import HomePageLoading from "./HomePageLoading";

interface OTPInputProps {
  length?: number;
  onOTPComplete?: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onOTPComplete }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<RefObject<TextInput>[]>(
    Array(length)
      .fill(null)
      .map(() => React.createRef())
  );

  const handleOTPChange = (text: string, index: number) => {
    const newOTP = [...otp];
    newOTP[index] = text;
    setOtp(newOTP);

    if (text.length === 1 && index < length - 1) {
      inputRefs.current[index + 1]?.current?.focus();
    }

    if (newOTP.every((digit) => digit !== "")) {
      //   onOTPComplete(newOTP.join(""));
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (
      event.nativeEvent.key === "Backspace" &&
      index > 0 &&
      otp[index] === ""
    ) {
      inputRefs.current[index - 1]?.current?.focus();
    }
  };

  return (
    <View className="flex-row justify-between">
      {otp.map((digit, index) => (
        <TextInput
          className="w-10 h-10 border bg-neutral-50 rounded-md border-neutral-200 text-center mx-1.5 text-lg"
          key={index}
          ref={inputRefs.current[index]}
          maxLength={1}
          keyboardType="numeric"
          onChangeText={(text) => handleOTPChange(text, index)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          value={digit}
        />
      ))}
    </View>
  );
};

export default OTPInput;
