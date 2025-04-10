# React Native Map POC

A Proof of Concept (POC) application demonstrating the implementation of maps in React Native using `react-native-maps` and location services with Expo.

## Features

- Interactive map view with user location tracking
- Custom markers for points of interest
- Location-based navigation buttons
- Real-time location updates
- Map controls including:
  - User location button
  - Compass
  - Scale
  - Traffic information
  - Building outlines
  - Points of interest

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)
- Physical device with location services enabled (for real location testing)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd reactnativemappoc
```

2. Install dependencies:
```bash
npm install

```

3. Start the development server:
```bash
npx expo start
```

## Usage

1. Launch the app on your device or emulator
2. Grant location permissions when prompted
3. The map will automatically center on your current location
4. Use the buttons at the bottom to navigate to specific locations:
   - "Go to Station" - Navigates to St Albans City railway station
   - "Go to Park" - Navigates to Clarence Park

## Technologies Used

- React Native
- Expo
- react-native-maps
- expo-location

## Project Structure

```
reactnativemappoc/
├── App.tsx              # Main application component
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md           # Project documentation
```

## Location Features

The app includes:
- Automatic location detection
- Location permission handling
- Real-time location updates
- Custom markers for points of interest
- Smooth animations when navigating between locations

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 