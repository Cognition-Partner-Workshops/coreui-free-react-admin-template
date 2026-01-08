#!/usr/bin/env node

/**
 * Build Performance Test Script
 * Measures build time, bundle size, and other performance metrics
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const THRESHOLDS = {
  BUILD_TIME_MS: 120000, // 2 minutes
  BUNDLE_SIZE_MB: 5, // 5MB total bundle size
  CHUNK_COUNT_MAX: 50, // Maximum number of chunks
  LARGEST_CHUNK_MB: 2, // 2MB for largest chunk
};

const results = {
  timestamp: new Date().toISOString(),
  tests: [],
  summary: {
    passed: 0,
    failed: 0,
    total: 0,
  },
};

function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',
    success: '\x1b[32m',
    error: '\x1b[31m',
    warn: '\x1b[33m',
    reset: '\x1b[0m',
  };
  console.log(`${colors[type]}[${type.toUpperCase()}]${colors.reset} ${message}`);
}

function addResult(testName, passed, durationMs, threshold, details = {}) {
  results.tests.push({
    testName,
    passed,
    durationMs,
    threshold,
    details,
  });
  results.summary.total++;
  if (passed) {
    results.summary.passed++;
  } else {
    results.summary.failed++;
  }
}

function measureBuildTime() {
  log('Measuring build time...');
  const startTime = Date.now();

  try {
    execSync('npm run build', {
      cwd: path.resolve(__dirname, '../..'),
      stdio: 'pipe',
    });
    const endTime = Date.now();
    const duration = endTime - startTime;
    const passed = duration <= THRESHOLDS.BUILD_TIME_MS;

    log(`Build completed in ${duration}ms (threshold: ${THRESHOLDS.BUILD_TIME_MS}ms)`, passed ? 'success' : 'error');
    addResult('Build Time', passed, duration, THRESHOLDS.BUILD_TIME_MS);
    return true;
  } catch (error) {
    log(`Build failed: ${error.message}`, 'error');
    addResult('Build Time', false, 0, THRESHOLDS.BUILD_TIME_MS, { error: error.message });
    return false;
  }
}

function analyzeBundleSize() {
  log('Analyzing bundle size...');
  const buildDir = path.resolve(__dirname, '../../build');

  if (!fs.existsSync(buildDir)) {
    log('Build directory not found', 'error');
    addResult('Bundle Size', false, 0, THRESHOLDS.BUNDLE_SIZE_MB, { error: 'Build directory not found' });
    return;
  }

  const startTime = Date.now();
  let totalSize = 0;
  let chunkCount = 0;
  let largestChunk = 0;
  const chunks = [];

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.js') || file.endsWith('.css')) {
        const size = stat.size;
        totalSize += size;
        chunkCount++;
        if (size > largestChunk) {
          largestChunk = size;
        }
        chunks.push({ file, size });
      }
    }
  }

  walkDir(buildDir);
  const endTime = Date.now();

  const totalSizeMB = totalSize / (1024 * 1024);
  const largestChunkMB = largestChunk / (1024 * 1024);

  // Test: Total bundle size
  const bundleSizePassed = totalSizeMB <= THRESHOLDS.BUNDLE_SIZE_MB;
  log(
    `Total bundle size: ${totalSizeMB.toFixed(2)}MB (threshold: ${THRESHOLDS.BUNDLE_SIZE_MB}MB)`,
    bundleSizePassed ? 'success' : 'error'
  );
  addResult('Bundle Size', bundleSizePassed, endTime - startTime, THRESHOLDS.BUNDLE_SIZE_MB, {
    totalSizeMB: totalSizeMB.toFixed(2),
    chunkCount,
  });

  // Test: Chunk count
  const chunkCountPassed = chunkCount <= THRESHOLDS.CHUNK_COUNT_MAX;
  log(
    `Chunk count: ${chunkCount} (threshold: ${THRESHOLDS.CHUNK_COUNT_MAX})`,
    chunkCountPassed ? 'success' : 'error'
  );
  addResult('Chunk Count', chunkCountPassed, 0, THRESHOLDS.CHUNK_COUNT_MAX, { chunkCount });

  // Test: Largest chunk size
  const largestChunkPassed = largestChunkMB <= THRESHOLDS.LARGEST_CHUNK_MB;
  log(
    `Largest chunk: ${largestChunkMB.toFixed(2)}MB (threshold: ${THRESHOLDS.LARGEST_CHUNK_MB}MB)`,
    largestChunkPassed ? 'success' : 'error'
  );
  addResult('Largest Chunk', largestChunkPassed, 0, THRESHOLDS.LARGEST_CHUNK_MB, {
    largestChunkMB: largestChunkMB.toFixed(2),
  });

  // Log top 5 largest chunks
  chunks.sort((a, b) => b.size - a.size);
  log('Top 5 largest chunks:');
  chunks.slice(0, 5).forEach((chunk, i) => {
    log(`  ${i + 1}. ${chunk.file}: ${(chunk.size / 1024).toFixed(2)}KB`);
  });
}

function measureLintTime() {
  log('Measuring lint time...');
  const startTime = Date.now();

  try {
    execSync('npm run lint', {
      cwd: path.resolve(__dirname, '../..'),
      stdio: 'pipe',
    });
    const endTime = Date.now();
    const duration = endTime - startTime;
    const threshold = 30000; // 30 seconds
    const passed = duration <= threshold;

    log(`Lint completed in ${duration}ms (threshold: ${threshold}ms)`, passed ? 'success' : 'error');
    addResult('Lint Time', passed, duration, threshold);
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    log(`Lint completed with warnings/errors in ${duration}ms`, 'warn');
    addResult('Lint Time', true, duration, 30000, { hasWarnings: true });
  }
}

function generateReport() {
  log('\n=== Performance Test Report ===');
  console.log(JSON.stringify(results, null, 2));

  const reportPath = path.resolve(__dirname, 'results.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  log(`Report saved to ${reportPath}`, 'success');

  return results.summary.failed === 0;
}

async function main() {
  log('Starting Performance Tests for CoreUI React Admin Template\n');

  measureLintTime();
  const buildSuccess = measureBuildTime();

  if (buildSuccess) {
    analyzeBundleSize();
  }

  const allPassed = generateReport();

  if (!allPassed) {
    log(`\n${results.summary.failed} test(s) failed`, 'error');
    process.exit(1);
  }

  log(`\nAll ${results.summary.total} tests passed!`, 'success');
}

main().catch((error) => {
  log(`Unexpected error: ${error.message}`, 'error');
  process.exit(1);
});
