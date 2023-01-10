/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'test-detox.ios': {
      type: 'ios.app',
      binaryPath: 'bin/Exponent.app',
    },
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'bin/Exponent.app',
      build: 'xcodebuild -workspace ios/imhere.xcworkspace -scheme imhere -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android && ./gradlew assembleDebug && ./gradlew assembleAndroidTest -DtestBuildType=debug && cd ..',
      reversePorts: [
        8081
      ]
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 8'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_33_x86_64'
      }
    }
  },
  configurations: {
    /*'ios.sim':{
      device: 'simulator',
      app: 'test-detox.ios'
    },*/
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    }
  }
};
