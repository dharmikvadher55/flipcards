import pandas as pd

# Read the CSV file into a DataFrame
df = pd.read_csv('your_csv_file.csv')

# Extract the 'Name' column from the DataFrame
names = df['Name'].tolist()

# Count occurrences of each keyword/concept
keyword_counts = {}
for name in names:
    keywords = name.lower().split()
    for keyword in keywords:
        if keyword in keyword_counts:
            keyword_counts[keyword] += 1
        else:
            keyword_counts[keyword] = 1

# Identify keywords/concepts occurring multiple times
multiple_occurrences = {keyword: count for keyword, count in keyword_counts.items() if count > 1}

# Sort the keywords/concepts by their occurrence count
sorted_occurrences = sorted(multiple_occurrences.items(), key=lambda x: x[1], reverse=True)

# Display the results
print("Keywords/Concepts Occurring Multiple Times:")
for keyword, count in sorted_occurrences:
    print(f"{keyword}: {count} occurrences")
