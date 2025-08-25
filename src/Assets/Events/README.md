# Event Photos Instructions

## How to Add Your Event Photos

1. **Save your photos** in this folder (`src/Assets/Events/`)
   - Use descriptive names like: `albany-wolves-mascot-1.jpg`, `community-suite-1.jpg`, etc.
   - Supported formats: JPG, PNG, WebP

2. **Update the Events.jsx file** to import your photos:
   ```javascript
   // Add these imports at the top of src/Pages/Events.jsx
   import AlbanyWolvesMascot1 from '../Assets/Events/albany-wolves-mascot-1.jpg';
   import CommunitySuite1 from '../Assets/Assets/Events/community-suite-1.jpg';
   // ... add more imports for each photo
   ```

3. **Update the imageGallery array** to use your imported photos:
   ```javascript
   const imageGallery = [
     { 
       id: 1, 
       title: 'Albany Wolves Mascot Meet & Greet', 
       description: 'Youth group enjoying a special meet and greet with the Albany Wolves mascot at the arena',
       imageUrl: AlbanyWolvesMascot1, // Use your imported photo here
       category: 'Mascot Event',
       date: 'November 30, 2024'
     },
     // ... add more entries for each photo
   ];
   ```

## Photo Categories
Based on your photos, you can use these categories:
- **Mascot Event** - Photos with the Albany Wolves/Firebirds mascot
- **Community** - Group photos in suites or viewing areas
- **Leadership** - Youth leadership activities
- **Sports** - Sports-related events and activities
- **Education** - Educational programs and workshops
- **Family** - Family-oriented events
- **Fundraiser** - Fundraising events

## Tips for Best Results
- Use high-quality photos (at least 800px wide)
- Keep file sizes reasonable (under 2MB each)
- Use consistent aspect ratios for better grid layout
- Add descriptive titles and dates for each photo
