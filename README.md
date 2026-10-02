# FASTEX Calculator V1

## Τι κάνει
- Δέχεται διεύθυνση παραλαβής και παράδοσης.
- Καλεί τον Google Routes API μέσω server.
- Υπολογίζει πραγματική οδική απόσταση και εκτιμώμενο χρόνο.
- Χρησιμοποιεί `TWO_WHEELER` για μηχανοκίνητο δίκυκλο.
- Κρατά προσωρινά τα στοιχεία της διαδρομής για το επόμενο βήμα.

## Ασφάλεια
Το Google API key ΔΕΝ μπαίνει στον browser. Ρυθμίζεται ως μεταβλητή περιβάλλοντος:
`GOOGLE_MAPS_API_KEY`

Για production χρησιμοποίησε restricted API key και ενεργό billing.

## Εγκατάσταση
1. Εγκατάστησε Node.js 18+.
2. Άνοιξε terminal στον φάκελο.
3. `npm install`
4. Ρύθμισε `GOOGLE_MAPS_API_KEY`.
5. `npm start`
6. Άνοιξε `http://localhost:3000`

## Google Cloud
Ενεργοποίησε Routes API στο Google Cloud project και δημιούργησε API key.
Περιόρισε το key στα APIs/περιβάλλοντα που χρειάζονται.

## Επόμενο FASTEX V1.1
- Places Autocomplete
- χάρτης με διαδρομή
- αυτόματο κόστος σύμφωνα με τον τιμοκατάλογο FASTEX
- αυτόματος αριθμός αποστολής
- αποθήκευση αποστολής
- σύνδεση με Proofly/POD
- δημιουργία FASTEX PDF
