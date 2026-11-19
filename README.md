# Chef's Menu Manager

Chef's Menu Manager is a mobile application created for Christoffel's kitchen. It provides a simple, attractive way for a chef to sign in, add menu items, view the restaurant menu, and manage the chef profile.

## Application Overview

The app is designed for fast use in a working kitchen. It includes a polished dashboard, clearly labeled forms, course selection, menu cards, and bottom navigation. Menu items are added in memory during the current app session and are automatically displayed throughout the app.

## Main Features

### Login

- Allows the chef to enter an email address and password.
- Validates empty login fields.
- Navigates to the dashboard after successful sign-in.

### Dashboard

- Welcomes Chef Christoffel.
- Shows the total number of menu items.
- Displays menu item totals by course.
- Provides quick links to the add-item and menu screens.

### Add Menu Item

The chef can enter:

- Dish name
- Description
- Course: Starter, Main, Dessert, or Beverage
- Price in South African rand

The form validates required fields and checks that the price is a valid amount greater than zero. A confirmation appears after an item is successfully saved.

### Menu

- Displays all saved menu items using a scrollable list.
- Automatically updates when a new item is added.
- Shows each dish name, course, description, and price.
- Displays a friendly empty state when no menu items exist.

### Chef Profile

- Shows the chef's name and role.
- Displays the total menu item and course counts.
- Provides restaurant and email information.
- Includes a confirmed logout action.

## Navigation

The app uses React Navigation and includes these screens:

- Login
- Dashboard / Home
- Add Menu Item
- Menu Items
- Chef Profile

A bottom navigation bar provides quick access to Home, Menu, Add, and Profile.

## Design

The interface uses a warm, professional restaurant aesthetic based on:

- Forest green
- Cream
- Sand
- Gold
- White and neutral text colors

The layout is consistent across all screens, with readable text, clear buttons, rounded cards, accessible spacing, and mobile-first components.

## Technologies

- Expo
- React Native
- TypeScript
- React Navigation
- Expo Status Bar
- React Native Safe Area Context

## Project Structure

- `App.tsx` - Application screens, navigation, state, validation, and styles.
- `app.json` - Expo application configuration.
- `package.json` - Dependencies and run scripts.
- `assets/` - Expo icons and application images.
- `README.md` - Project documentation.

## Run the App Locally

Install dependencies:

```powershell
npm install
```

Start the Expo development server:

```powershell
npm start
```

Then:

- Scan the QR code using Expo Go on a supported phone.
- Press `a` to open the Android app if an emulator is available.
- Press `w` to open the app in a web browser.

## TypeScript Check

Run a project-wide TypeScript check with:

```powershell
npx tsc --noEmit
```

## Current Scope

This working version supports login, menu item creation, menu viewing, dashboard information, chef profile details, and logout. Editing, deleting, searching, filtering, persistent storage, and menu statistics are not included in this version.
