// keys = restaurant info.id from the namastedev listRestaurants API
export const RESTAURANT_IMAGES = {
  123456:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop", // Pizza Paradise
  234567:
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=250&fit=crop", // Burger Hub
  345678:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop", // Green Bites
  456789:
    "https://images.unsplash.com/photo-1734770931927-6410f9a64832?w=400&h=250&fit=crop", // Spice Kingdom
  567890:
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=250&fit=crop", // Chinese Dragon
  678901:
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=250&fit=crop", // Dessert Delight
  789012:
    "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=400&h=250&fit=crop", // Sushi Station
  890123:
    "https://images.unsplash.com/photo-1680359870490-d49895a285dd?w=400&h=250&fit=crop", // South Spice
  901234:
    "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&h=250&fit=crop", // Pasta Palace
};

export const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop";

// keys = menu item card.info.id from the namastedev listRestaurantMenu API
export const MENU_ITEM_IMAGES = {
  // ── Pizza Paradise items ──────────────────────────────
  item_001:
    "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=300&h=200&fit=crop", // Margherita Pizza
  item_002:
    "https://images.unsplash.com/photo-1692737580547-b45bb4a02356?w=300&h=200&fit=crop", // Pepperoni Pizza
  item_003:
    "https://images.unsplash.com/photo-1617470703245-ed7bc56788e9?w=300&h=200&fit=crop", // Veggie Supreme
  item_004:
    "https://images.unsplash.com/photo-1767065603116-8cee3bf11372?w=300&h=200&fit=crop", // BBQ Chicken Pizza
  item_005:
    "https://images.unsplash.com/photo-1562835155-a7c2a225e97d?w=300&h=200&fit=crop", // Hawaiian Pizza
  item_006:
    "https://images.unsplash.com/photo-1770837776918-6f60f5fe4b35?w=300&h=200&fit=crop", // Coca Cola

  // ── Burger Hub items ──────────────────────────────────
  item_101:
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop", // Classic Beef Burger
  item_102:
    "https://images.unsplash.com/photo-1671106571674-a89083d27e60?w=300&h=200&fit=crop", // Chicken Deluxe Burger
  item_103:
    "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=300&h=200&fit=crop", // Double Cheese Burger
  item_104:
    "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=300&h=200&fit=crop", // Veggie Delight Burger
  item_105:
    "https://images.unsplash.com/photo-1723476634131-013b8bbd8a81?w=300&h=200&fit=crop", // Paneer Tikka Burger
  item_106:
    "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=300&h=200&fit=crop", // French Fries
  item_107:
    "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300&h=200&fit=crop", // Onion Rings
  item_108:
    "https://images.unsplash.com/photo-1693857229816-b92cdc8be222?w=300&h=200&fit=crop", // Chocolate Shake

  // ── Green Bites items ─────────────────────────────────
  item_201:
    "https://images.unsplash.com/photo-1778449532114-430396ada55b?w=300&h=200&fit=crop", // Greek Salad
  item_202:
    "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&h=200&fit=crop", // Caesar Salad
  item_203:
    "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=300&h=200&fit=crop", // Quinoa Power Bowl
  item_204:
    "https://images.unsplash.com/photo-1684403620650-81dc661a69db?w=300&h=200&fit=crop", // Acai Berry Bowl
  item_205:
    "https://images.unsplash.com/photo-1650562081163-a8e820a7f1aa?w=300&h=200&fit=crop", // Green Goddess Bowl
  item_206:
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop", // Orange Juice
  item_207:
    "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=200&fit=crop", // Green Detox Juice
  item_208:
    "https://images.unsplash.com/photo-1748955308143-5055af50bba6?w=300&h=200&fit=crop", // Falafel Wrap

  // ── Spice Kingdom items ───────────────────────────────
  item_301:
    "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&h=200&fit=crop", // Chicken Dum Biryani
  item_302:
    "https://images.unsplash.com/photo-1716550781939-beb7d7247aae?w=300&h=200&fit=crop", // Mutton Biryani
  item_303:
    "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=300&h=200&fit=crop", // Veg Dum Biryani
  item_304:
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop", // Butter Chicken
  item_305:
    "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop", // Paneer Tikka Masala
  item_306:
    "https://images.unsplash.com/photo-1789983665266-f1a6ea13b311?w=300&h=200&fit=crop", // Dal Makhani
  item_307:
    "https://images.unsplash.com/photo-1697155406014-04dc649b0953?w=300&h=200&fit=crop", // Butter Naan
  item_308:
    "https://images.unsplash.com/photo-1756821753151-0879e7862e50?w=300&h=200&fit=crop", // Garlic Naan
  item_309:
    "https://images.unsplash.com/photo-1595608010652-d8bf1103a1c5?w=300&h=200&fit=crop", // Gulab Jamun

  // ── Chinese Dragon items ──────────────────────────────
  item_401:
    "https://images.unsplash.com/photo-1676976197084-a7b35e0d2537?w=300&h=200&fit=crop", // Chicken Manchurian
  item_402:
    "https://images.unsplash.com/photo-1623253083987-26681ce4a992?w=300&h=200&fit=crop", // Spring Rolls
  item_403:
    "https://images.unsplash.com/photo-1680991172715-4074203a40d3?w=300&h=200&fit=crop", // Chilli Paneer
  item_404:
    "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=200&fit=crop", // Hakka Noodles
  item_405:
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop", // Chicken Fried Rice
  item_406:
    "https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?w=300&h=200&fit=crop", // Schezwan Noodles
  item_407:
    "https://images.unsplash.com/photo-1537516803400-bf9d09ae3d2f?w=300&h=200&fit=crop", // Sweet and Sour Chicken
  item_408:
    "https://images.unsplash.com/photo-1776729851079-686daa8ff9aa?w=300&h=200&fit=crop", // Kung Pao Chicken
  item_409:
    "https://images.unsplash.com/photo-1527976746453-f363eac4d889?w=300&h=200&fit=crop", // Hot and Sour Soup

  // ── Dessert Delight items ─────────────────────────────
  item_501:
    "https://images.unsplash.com/photo-1597648152428-f883fbc9c873?w=300&h=200&fit=crop", // Chocolate Fudge Ice Cream
  item_502:
    "https://images.unsplash.com/photo-1532678465554-94846274c297?w=300&h=200&fit=crop", // Strawberry Ice Cream
  item_503:
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop", // Butterscotch Ice Cream
  item_504:
    "https://images.unsplash.com/photo-1779282312464-d556d852daa4?w=300&h=200&fit=crop", // Black Forest Cake
  item_505:
    "https://images.unsplash.com/photo-1685957652870-d56b0e5bea52?w=300&h=200&fit=crop", // Red Velvet Cake
  item_506:
    "https://images.unsplash.com/photo-1633881613795-d273150581ee?w=300&h=200&fit=crop", // Hot Fudge Sundae
  item_507:
    "https://images.unsplash.com/photo-1780148686706-4af0349a6003?w=300&h=200&fit=crop", // Brownie Sundae
  item_508:
    "https://images.unsplash.com/photo-1786783506862-8ccc1b738a38?w=300&h=200&fit=crop", // Oreo Shake

  // ── Sushi Station items ───────────────────────────────
  item_601:
    "https://images.unsplash.com/photo-1787589481636-a69533c81edb?w=300&h=200&fit=crop", // California Roll
  item_602:
    "https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?w=300&h=200&fit=crop", // Spicy Tuna Roll
  item_603:
    "https://images.unsplash.com/photo-1582450871972-ab5ca641643d?w=300&h=200&fit=crop", // Dragon Roll
  item_604:
    "https://images.unsplash.com/photo-1744360515510-db7bf0f6def8?w=300&h=200&fit=crop", // Salmon Nigiri
  item_605:
    "https://images.unsplash.com/photo-1790498486528-da1ff628e8f2?w=300&h=200&fit=crop", // Tuna Nigiri
  item_606:
    "https://images.unsplash.com/photo-1638866281450-3933540af86a?w=300&h=200&fit=crop", // Tonkotsu Ramen
  item_607:
    "https://images.unsplash.com/photo-1617421753170-46511a8d73fc?w=300&h=200&fit=crop", // Miso Ramen
  item_608:
    "https://images.unsplash.com/photo-1557621956-ce58555aa0ce?w=300&h=200&fit=crop", // Edamame
  item_609:
    "https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?w=300&h=200&fit=crop", // Gyoza

  // ── South Spice items ─────────────────────────────────
  item_701:
    "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=200&fit=crop", // Masala Dosa
  item_702:
    "https://images.unsplash.com/photo-1791209135209-5fe1e8295b47?w=300&h=200&fit=crop", // Paper Dosa
  item_703:
    "https://images.unsplash.com/photo-1743517894265-c86ab035adef?w=300&h=200&fit=crop", // Mysore Masala Dosa
  item_704:
    "https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?w=300&h=200&fit=crop", // Idli Sambar
  item_705:
    "https://images.unsplash.com/photo-1730191843435-073792ba22bc?w=300&h=200&fit=crop", // Medu Vada
  item_706:
    "https://images.unsplash.com/photo-1736239092819-da2e9b4b5c6b?w=300&h=200&fit=crop", // Sambar Vada
  item_707:
    "https://images.unsplash.com/photo-1589899476489-2b5e3e2b323f?w=300&h=200&fit=crop", // Bisi Bele Bath
  item_708:
    "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?w=300&h=200&fit=crop", // Curd Rice
  item_709:
    "https://images.unsplash.com/photo-1758387941825-a6ecaec9c14d?w=300&h=200&fit=crop", // Filter Coffee

  // ── Pasta Palace items ────────────────────────────────
  item_801:
    "https://images.unsplash.com/photo-1764586119076-61711e8ed25a?w=300&h=200&fit=crop", // Spaghetti Carbonara
  item_802:
    "https://images.unsplash.com/photo-1788599760197-81e54ec9c36a?w=300&h=200&fit=crop", // Penne Arrabbiata
  item_803:
    "https://images.unsplash.com/photo-1768668053140-f589ed4bef31?w=300&h=200&fit=crop", // Fettuccine Alfredo
  item_804:
    "https://images.unsplash.com/photo-1709429790175-b02bb1b19207?w=300&h=200&fit=crop", // Lasagna
  item_805:
    "https://images.unsplash.com/photo-1701484185547-a71576b65e1a?w=300&h=200&fit=crop", // Baked Mac and Cheese
  item_806:
    "https://images.unsplash.com/photo-1611068120813-eca5a8cbf793?w=300&h=200&fit=crop", // Minestrone Soup
  item_807:
    "https://images.unsplash.com/photo-1746211224437-8340316b288d?w=300&h=200&fit=crop", // Caesar Salad
  item_808:
    "https://images.unsplash.com/photo-1556008531-57e6eefc7be4?w=300&h=200&fit=crop", // Garlic Bread
};

export const MENU_RESTAURANT_IMAGES = {
  123456:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=300&fit=crop", // Pizza Paradise
  234567:
    "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&h=300&fit=crop", // Burger Hub
  345678:
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=300&fit=crop", // Green Bites
  456789:
    "https://images.unsplash.com/photo-1734770931927-6410f9a64832?w=800&h=300&fit=crop", // Spice Kingdom
  567890:
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&h=300&fit=crop", // Chinese Dragon
  678901:
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=300&fit=crop", // Dessert Delight
  789012:
    "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=800&h=300&fit=crop", // Sushi Station
  890123:
    "https://images.unsplash.com/photo-1680359870490-d49895a285dd?w=800&h=300&fit=crop", // South Spice
  901234:
    "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&h=300&fit=crop", // Pasta Palace
};

export const FALLBACK_MENU_IMG =
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=200&fit=crop";
