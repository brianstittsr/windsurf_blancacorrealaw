# Imagery Guidelines for Blanca Correa Law Website

## 1. Photography Style

The Blanca Correa Law website will use authentic photography that reinforces the "Pathways to Belonging" visual theme. This document provides guidelines for selecting, creating, and implementing imagery across the website.

### 1.1 Core Principles

- **Authenticity:** Real people in natural settings, not posed stock photography
- **Diversity:** Representation of various cultures, ages, and backgrounds
- **Warmth:** Warm lighting that creates a welcoming, hopeful atmosphere
- **Local Context:** Incorporation of North Carolina settings and landmarks
- **Journey Elements:** Visual elements that suggest pathways, progress, and connection

### 1.2 Photography Tone

All photography should convey a sense of:
- **Hope and optimism** (not fear or anxiety)
- **Dignity and respect** (not vulnerability or victimization)
- **Progress and forward movement** (not stagnation or barriers)
- **Community and connection** (not isolation)
- **Professional guidance** (not bureaucratic complexity)

## 2. Photography Categories

### 2.1 Hero Images

**Purpose:** Create emotional connection and set the tone for the website

**Guidelines:**
- Feature authentic, diverse individuals and families
- Include subtle journey/path elements in composition
- Use warm, natural lighting with the terracotta/teal color palette influence
- Incorporate North Carolina settings where possible
- Avoid clichéd immigration imagery (flags, gavels, Statue of Liberty)

**Examples:**
- Family reunited at airport with warm embraces
- Client and attorney walking together on a path
- Diverse community gathering with warm lighting
- New citizen with subtle NC landmark in background

### 2.2 Journey Imagery

**Purpose:** Illustrate progress and pathways through the immigration process

**Guidelines:**
- Use literal and metaphorical path imagery
- Include bridges, doorways, roads, and other transition elements
- Show forward movement and progress
- Incorporate the warm color palette
- Balance hope with realism

**Examples:**
- Winding path through NC landscape
- Bridge connecting two points
- Open doorway with light streaming through
- Steps leading upward with people ascending
- Road signs with directional guidance

### 2.3 Portrait Photography

**Purpose:** Build trust and human connection

**Guidelines:**
- Natural, authentic poses (not stiff or overly formal)
- Warm, soft lighting that flatters all skin tones
- Neutral, uncluttered backgrounds
- Direct eye contact for attorney portraits
- Genuine expressions that convey confidence and approachability

**Examples:**
- Attorney portraits in office setting with warm lighting
- Client testimonial portraits with genuine expressions
- Team photos showing collaboration and support
- Candid interaction shots showing attorney-client relationships

### 2.4 Documentary Style

**Purpose:** Show authenticity and real-world impact

**Guidelines:**
- Capture genuine moments, not posed scenes
- Use natural lighting whenever possible
- Focus on interactions and emotions
- Show the immigration journey in progress
- Balance privacy concerns with authentic representation

**Examples:**
- Attorney explaining documents to clients
- Family reviewing paperwork together
- Community workshop or information session
- Celebration after successful case completion
- Client receiving important documents

### 2.5 Local Landmarks

**Purpose:** Establish local expertise and North Carolina connection

**Guidelines:**
- Feature recognizable NC locations relevant to immigration
- Include USCIS offices, courthouses, and government buildings
- Showcase community centers and support organizations
- Incorporate distinctive Raleigh-Durham-Chapel Hill architecture
- Balance institutional settings with warmth and humanity

**Examples:**
- Raleigh USCIS office with clear signage
- Durham courthouse with people on steps
- Chapel Hill community center hosting immigration workshop
- NC State Capitol with diverse visitors
- Local neighborhood centers serving immigrant communities

## 3. Technical Requirements

### 3.1 Image Specifications

**Resolution:**
- Minimum 72dpi for web display
- High enough resolution to display clearly on retina/high-DPI screens

**Dimensions:**
- Hero images: 1920px × 1080px (16:9 ratio)
- Content images: 800px × 600px minimum
- Thumbnails: 400px × 300px minimum
- Portrait photos: 600px × 800px minimum

**File Format:**
- JPG for photographs (85% quality minimum)
- PNG for images requiring transparency
- SVG for icons and simple illustrations
- WebP with JPG fallback for optimal performance

**File Size:**
- Hero images: Optimize to under 200KB
- Content images: Optimize to under 100KB
- Thumbnails: Optimize to under 50KB
- Total page weight: Keep under 1MB for all images combined

### 3.2 Responsive Implementation

**Art Direction:**
- Provide different crops for different viewport sizes
- Ensure focal points remain visible at all screen sizes
- Consider vertical compositions for mobile devices

**Technical Implementation:**
- Use responsive image techniques (`srcset` and `sizes` attributes)
- Implement lazy loading for images below the fold
- Provide appropriate alt text for all images
- Use low-resolution placeholders for progressive loading

```html
<!-- Example of responsive image implementation -->
<img 
  src="family-small.jpg" 
  srcset="family-small.jpg 400w, family-medium.jpg 800w, family-large.jpg 1200w" 
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" 
  alt="Family celebrating successful immigration case with attorney"
  loading="lazy"
>
```

## 4. Image Categories by Page Type

### 4.1 Homepage

- **Hero Section:** Authentic image of diverse clients with subtle path motif
- **Pathway Selection:** Simple icons with supporting imagery for each pathway
- **Success Stories:** Client portraits with warm, hopeful expressions
- **About Section:** Team photo or attorney portrait with approachable styling

### 4.2 Pathway Pages

- **Header:** Visual representation of the specific pathway (family, employment, etc.)
- **Process Maps:** Supporting imagery for each step in the process
- **Success Stories:** Relevant client testimonial photos specific to that pathway
- **Resources:** Supporting imagery for downloadable resources and tools

### 4.3 About Pages

- **Attorney Profiles:** Professional portraits with warm lighting and approachable poses
- **Office Photos:** Welcoming office environment with warm colors
- **Team Photos:** Collaborative, supportive team dynamics
- **Community Involvement:** Documentary-style photos of community engagement

### 4.4 Resource Pages

- **Directory Listings:** Small thumbnails or icons for resource categories
- **Local Resources:** Photos of local support organizations and government offices
- **Document Examples:** Visual examples of important forms (with sensitive info removed)
- **Educational Content:** Supporting imagery for guides and educational resources

## 5. Image Selection Guidelines

### 5.1 Do's

- **DO** use images that reflect the diversity of the client base
- **DO** ensure proper representation of various cultures and backgrounds
- **DO** select images with warm, natural lighting
- **DO** include subtle path/journey elements where appropriate
- **DO** feature authentic emotions and genuine expressions
- **DO** showcase North Carolina settings and local context
- **DO** balance professional appearance with approachability
- **DO** ensure all images are properly licensed and credited
- **DO** obtain proper releases for any client photos used

### 5.2 Don'ts

- **DON'T** use clichéd immigration imagery (gavels, flags, Statue of Liberty)
- **DON'T** select images that emphasize fear, anxiety, or vulnerability
- **DON'T** use overly posed or inauthentic stock photography
- **DON'T** select images with cold or institutional color temperatures
- **DON'T** use images that reinforce stereotypes or lack diversity
- **DON'T** include images with visible text that requires translation
- **DON'T** use images with identifiable client information without consent
- **DON'T** select images that are culturally insensitive or inappropriate
- **DON'T** use low-quality, pixelated, or unprofessional images

## 6. Custom Photography Guidelines

### 6.1 Planning a Photo Shoot

**Location Selection:**
- Office environment with warm lighting
- Local North Carolina settings with significance to immigration
- Community spaces that reflect client experiences
- Outdoor locations with natural path elements

**Subject Preparation:**
- Provide clear guidance on clothing (business casual, avoid busy patterns)
- Suggest warm, earthy tones that complement the color palette
- Prepare subjects with conversation to capture genuine expressions
- Consider cultural preferences and sensitivities

**Shot List:**
- Attorney portraits (individual and team)
- Client interaction scenarios (with actors or willing clients)
- Office environment and consultation spaces
- Local landmarks and resources
- Process documentation (reviewing papers, signing documents)

### 6.2 Editing Style

**Color Grading:**
- Warm, slightly golden temperature
- Subtle enhancement of terracotta and teal tones
- Natural skin tones (not overly processed)
- Consistent look across all photography

**Editing Guidelines:**
- Light retouching only (maintain authenticity)
- Consistent brightness and contrast
- Subtle vignetting to focus attention
- Clean, uncluttered backgrounds
- Balanced exposure with good shadow detail

## 7. Image Management

### 7.1 File Naming Convention

Use consistent file naming to maintain organization:

```
[page]-[section]-[subject]-[language].[extension]
```

Examples:
- `home-hero-family-en.jpg`
- `family-pathway-process-es.jpg`
- `about-attorney-portrait-en.jpg`

### 7.2 Metadata and Organization

- Include descriptive alt text for all images
- Maintain an image library with categories and tags
- Document source, licensing, and usage rights
- Track which images have Spanish/English versions
- Maintain model releases for all client/staff photos

### 7.3 Bilingual Considerations

- Any images containing text must have both English and Spanish versions
- Infographics and process maps need language-specific versions
- Consider cultural nuances when selecting images for different language versions
- Ensure equal quality and representation across both language versions

## 8. Implementation Examples

### 8.1 Hero Section Example

```
+--------------------------------------------------------------+
|                                                              |
|     YOUR BRIDGE TO IMMIGRATION SUCCESS IN NORTH CAROLINA     |
|                                                              |
|  [Hero image: warm, authentic photo of diverse people        |
|   with path/journey visual motif]                            |
|                                                              |
+--------------------------------------------------------------+
```

**Image Description:** A diverse family walking along a sunlit path with the Raleigh skyline subtly visible in the background. The warm lighting creates a golden glow that emphasizes hope and new beginnings. The path curves gently, suggesting a journey, while the family members support each other, representing the guidance and support provided by Blanca Correa Law.

### 8.2 Process Map Image Example

```
+--------------------------------------------------------------+
|                                                              |
|           VISUAL PROCESS MAP                                 |
|                                                              |
|  [Step 1] --> [Step 2] --> [Step 3] --> [Step 4] --> [Step 5]|
|   |             |            |            |            |     |
|  [Image]      [Image]      [Image]      [Image]      [Image] |
|                                                              |
+--------------------------------------------------------------+
```

**Image Descriptions:**
1. **Initial Consultation:** Attorney and client in conversation with warm lighting
2. **Document Preparation:** Close-up of hands organizing documents with guidance
3. **Application Filing:** Document submission with confirmation receipt
4. **Case Processing:** Timeline visualization with progress indicator
5. **Successful Completion:** Celebration moment with family reunited or goal achieved

## 9. Accessibility Considerations

- Provide descriptive alt text for all images
- Ensure sufficient contrast for any text overlaid on images
- Avoid using images as the sole means of conveying information
- Consider users with color vision deficiencies when selecting images
- Ensure images do not contain flickering or flashing elements

**Example Alt Text:**
- Poor: "Immigration image"
- Better: "Family celebrating after naturalization ceremony outside Raleigh USCIS office"
- Best: "Diverse family of four embracing and smiling after successful naturalization ceremony, with Raleigh USCIS office visible in background, representing the culmination of their immigration journey"

## 10. Conclusion

The imagery used throughout the Blanca Correa Law website should consistently reinforce the "Pathways to Belonging" visual theme while providing authentic representation of the immigration journey. By following these guidelines, all photography will contribute to a cohesive, welcoming, and professional website that builds trust and connects with potential clients in both English and Spanish.
