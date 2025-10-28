// Tính điểm cho analysis results

// Tính tổng điểm từ checks
exports.calculateScore = (checks) => {
  let score = 0;
  let totalChecks = 0;

  // JSON-LD (20 điểm)
  if (checks.hasJsonLd) score += 20;
  totalChecks += 20;

  // Author (15 điểm)
  if (checks.hasAuthor) score += 15;
  totalChecks += 15;

  // Meta Description (20 điểm)
  if (checks.hasMetaDescription) {
    if (checks.metaDescriptionLength >= 120 && checks.metaDescriptionLength <= 160) {
      score += 20; // Optimal length
    } else if (checks.metaDescriptionLength > 0) {
      score += 10; // Có nhưng không optimal
    }
  }
  totalChecks += 20;

  // H2 headings (15 điểm)
  if (checks.h2Count >= 3 && checks.h2Count <= 8) {
    score += 15; // Optimal
  } else if (checks.h2Count > 0) {
    score += 8; // Có nhưng không optimal
  }
  totalChecks += 15;

  // OG Tags (15 điểm)
  if (checks.hasOgTags) score += 15;
  totalChecks += 15;

  // Canonical (15 điểm)
  if (checks.hasCanonical) score += 15;
  totalChecks += 15;

  // Convert sang percentage
  return Math.round((score / totalChecks) * 100);
};
