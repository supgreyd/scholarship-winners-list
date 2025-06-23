# Scholarship Winners - Nuxt 3 Application

This Nuxt 3 application displays a list of scholarship winners fetched from a JSON:API endpoint. The app is developed with server-side rendering (SSR) for performance and SEO optimization. It uses **PrimeVue** components for the interface and **Tailwind CSS** for utility-based styling.

## Key Features

- Integration with a JSON:API endpoint to fetch winner data (`https://scholarshipowl.com/jsonapi/winner`).
- Server-Side Rendering (SSR) for optimal SEO and performance.
- Seamless UI with **PrimeVue** components:
    - DataTable for organizing winner information.
    - Dialog functionality for detailed views of individual winners.
- Styled with **Tailwind CSS** for rapid and responsive design.
- TypeScript implementation across the entire application.
- Pagination for handling large datasets (optional enhancement included).
- Loading indicators and error handling for better user experience.

---

## Technologies Used

- [Nuxt 3 (v3.17.5)](https://nuxt.com/)
- [PrimeVue (v4.3.5)](https://primevue.org)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript
- JSON:API Specification ([jsonapi.org](https://jsonapi.org/))

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/supgreyd/scholarship-winners-list.git
   cd scholarship-winners-list
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. View the application at [http://localhost:3000](http://localhost:3000).

---

## Features Breakdown

### **1. JSON:API Endpoint Integration**
The app interacts with the JSON:API endpoint using the following URL:
A server-side proxy handler (`api/proxyWinners.ts`) is implemented to fetch and paginate data from the endpoint.

---

### **2. Components**
#### **Core Components**
- **`ViewWinners.vue`:** Main container for displaying a paginated and dynamic list of scholarship winners.
- **`WinnersTable.vue`:** Displays winners in a table using PrimeVue's DataTable component with lazy loading.
- **`WinnersInfoDialog.vue`:** Displays detailed information (e.g., photos, testimonials) on individual winners using PrimeVue's Dialog.
- **`BaseHeader/BaseFooter.vue`:** Provide consistent layout elements.
- **`BaseError.vue`:** Fallback for error handling.

#### **Skeleton Loading**
While waiting for data, a skeleton table (`BaseTableSkeleton.vue`) ensures smooth UX using PrimeVue's placeholders.

---

### **3. Utility Modules**
- **Proxy Handler (`proxyWinners.ts`)**:
  Handles server requests to the JSON:API endpoint with support for pagination.
- **Composable (`useScholarshipWinners.ts`)**:
  Encapsulates data fetching logic with reactivity, caching, and error handling using Nuxt's `useAsyncData`.

---

## Configuration

### **1. API Proxy**
The API interaction is handled through the proxy endpoint `/api/proxyWinners`. Query parameters like `page[number]` and `page[limit]` are used to paginate results effectively.

### **2. PrimeVue Setup**
PrimeVue components, such as `DataTable`, `Column`, and `Skeleton`, are imported and styled with the **Aura** theme.

The configuration is defined in `nuxt.config.ts`:
```typescript
primevue: {
  autoImport: false,
  components: {
    include: ['Button', 'DataTable', 'Column', 'DynamicDialog', 'Skeleton'],
  },
  options: {
    theme: { preset: Aura },
  }
}
```

---

## Folder Structure

- `components/`
    - `base/`: Reusable base components (e.g. `BaseHeader`, `BaseError`).
    - `winners/`: Components specific to the winners feature (e.g., `WinnersTable`).
- `composables/`: Encapsulated logic for reusability.
- `utils/`: Helper functions (e.g., `formatDate.ts`).
- `models/`: Types and interfaces for strict TypeScript typing.
- `api/`: Custom API functions (e.g., proxy for JSON:API).

---

## How to Use the Application

1. Open the application by running `npm run dev`.
2. The homepage will display a table of scholarship winners.
3. Use the paginator to navigate through the list.
4. For more details on a specific winner, click the "Details" button to open a dialog.

---

## Optional Enhancements

This project includes:
- **Pagination:** Navigate through large datasets effectively.
- **Loading Indicators:** Skeleton loaders are displayed while waiting for data.
- **Error Handling:** Graceful error messages for API failures.
- **Dynamic Dialogs:** Showcase detailed winner information in a responsive modal.

---

## Deployment

You can deploy this app on Netlify:
1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the `/dist` folder to Netlify.
3. You can view the project on https://scholarship-winners-list.netlify.app/

---

## License

**MIT License**. Feel free to fork and modify this application.
