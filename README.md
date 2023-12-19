# UniShare

## Introduction

UniShare is a marketplace platform tailored for Columbia University students, facilitating the renting and selling of dorm items within the campus community. This project aims to address the issue of frequent, expensive, and wasteful purchases by students. By enabling them to rent or sell items to peers, UniShare reduces financial burden and environmental waste. Targeted users are Columbia students seeking to engage in transactions for items like textbooks, vacuums, and other dorm essentials within their dorm or campus vicinity.

## Design Solution

UniShare offers a building-specific marketplace interface. Upon logging in and verifying their University Network ID (UNI), users can choose their residence building and either list their items or browse others' listings. Detailed information about each item, including photos, renter ratings, location, and rates, is available. The platform incorporates a calendar feature for booking and uses the Stripe API for transactions. The process concludes with a peer-to-peer item exchange and review system, ensuring a community-driven and secure experience.

## Tech Stack

- **Frontend**: JavaScript, CSS, HTML (Developed with React Native)
- **Backend**: Google Firebase

## Installation

### Prerequisites

- Node.js
- npm package management tool (or Expo CLI for alternative installation)

### Steps

1. Clone the repository to your local machine.
2. Open the project folder in Terminal.
3. Execute `npm install`. 
   - **Important**: Ignore any vulnerabilities warnings.
4. Start the application:
   - For standard setup: Run `npm start`.
   - For Expo setup: 
     - First, run `npm install expo-cli -g`.
     - Then, execute `expo start`.

### Running the App

- **On iOS Devices**:
  - Install the Expo Go app.
  - Scan the QR code generated in the terminal.
  - Test the app functionality.

- **On macOS (iOS Simulator)**:
  - Press 'i' in the terminal to open an iOS simulator.
  - Test the app functionality.

- **Note**: Web or Android compatibility is feasible but not recommended.

## Usage

After successful installation, users can log in, verify their UNI, select their building, and engage in item listings or rentals. The interface allows easy toggling between listing and browsing modes. Users can view detailed item information, book items using the integrated calendar, and complete transactions in person. Post-transaction, users are encouraged to leave reviews and confirm item return conditions.

## Contribution

For contributing to UniShare, please contact administrator for guidelines.

## License

UniShare is licensed under MIT.

## Support

For any queries or issues, please open an issue on the GitHub repository or contact the administrator.
