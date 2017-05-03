//@flow
import React from 'react';
import {View, Text} from 'react-native';
import styles from './ContentStepper-style';

type Step = {
  isActive: boolean;
  label: string;
};

type Props = {
  steps: Array<Step>;
};
export default function ContentStepper(props: Props) {
  let {steps} = props;
  let firstStep = 0;
  let lastStep = (steps.length === 0) ? 0 : steps.length - 1;
  return (
    <View style={styles.container}>
      {
        props.steps.map((step, index) => {
          let stepCounter = index + 1;
          if (index > firstStep && index < lastStep && step.isActive) {
            return (
              <View style={styles.stepContainer} key={index}>
                <View style={styles.stepActiveMiddle}>
                  <View style={styles.spacer}></View>
                  <View style={styles.roundedActive}>
                    <Text style={styles.textCounter}>{stepCounter}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.textLabel}>{step.label}</Text>
                  </View>
                </View>
                <View style={styles.arrowActiveContainer}>
                  <View style={styles.arrow}></View>
                </View>
              </View>
            );
          } else if (index > firstStep && index < lastStep && !step.isActive) {
            return (
              <View style={styles.stepContainer} key={index}>
                <View style={styles.stepInactiveMiddle}>
                  <View style={styles.spacer}></View>
                  <View style={styles.roundedInactive}>
                    <Text style={styles.textCounter}>{stepCounter}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.textLabel}>{step.label}</Text>
                  </View>
                </View>
                <View style={styles.arrowInactiveContainer}>
                  <View style={styles.arrow}></View>
                </View>
              </View>
            );
          } else if (index === firstStep && step.isActive) {
            return (
              <View style={styles.stepContainer} key={index}>
                <View style={styles.stepActiveLeft}>
                  <View style={styles.spacer}></View>
                  <View style={styles.roundedActive}>
                    <Text style={styles.textCounter}>{stepCounter}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.textLabel}>{step.label}</Text>
                  </View>
                </View>
                <View style={styles.arrowActiveContainer}>
                  <View style={styles.arrow}></View>
                </View>
              </View>
            );
          } else if (index === firstStep && !step.isActive) {
            return (
              <View style={styles.stepContainer} key={index}>
                <View style={styles.stepInactiveLeft}>
                  <View style={styles.spacer}></View>
                  <View style={styles.roundedInactive}>
                    <Text style={styles.textCounter}>{stepCounter}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.textLabel}>{step.label}</Text>
                  </View>
                </View>
                <View style={styles.arrowInactiveContainer}>
                  <View style={styles.arrow}></View>
                </View>
              </View>
            );
          } else if (index === lastStep && step.isActive) {
            return (
              <View style={styles.stepContainer} key={index}>
                <View style={styles.stepActiveRight}>
                  <View style={styles.spacer}></View>
                  <View style={styles.roundedActive}>
                    <Text style={styles.textCounter}>{stepCounter}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.textLabel}>{step.label}</Text>
                  </View>
                </View>
              </View>
            );
          } else if (index === lastStep && !step.isActive) {
            return (
              <View style={styles.stepContainer} key={index}>
                <View style={styles.stepInactiveRight}>
                  <View style={styles.spacer}></View>
                  <View style={styles.roundedInactive}>
                    <Text style={styles.textCounter}>{stepCounter}</Text>
                  </View>
                  <View style={styles.label}>
                    <Text style={styles.textLabel}>{step.label}</Text>
                  </View>
                </View>
              </View>
            );
          }
          return null;
        })
      }
    </View>
  );
}
