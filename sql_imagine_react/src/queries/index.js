import { select_all_students_query } from './select_all_students';
import { select_all_marks_query } from './select_all_marks';
import { select_distinct_grades_query } from './select_distinct_grades';
import { select_specific_columns_query } from './select_specific_columns';
import { where_filter_by_grade_query } from './where_filter_by_grade';
import { where_high_scoring_query } from './where_high_scoring';
import { where_multiple_conditions_query } from './where_multiple_conditions';
import { where_or_condition_query } from './where_or_condition';
import { where_between_query } from './where_between';
import { order_by_age_query } from './order_by_age';
import { order_by_marks_desc_query } from './order_by_marks_desc';
import { order_by_multiple_columns_query } from './order_by_multiple_columns';
import { group_by_grade_query } from './group_by_grade';
import { group_by_subject_query } from './group_by_subject';
import { group_by_with_count_query } from './group_by_with_count';
import { having_min_marks_query } from './having_min_marks';
import { having_avg_marks_query } from './having_avg_marks';
import { join_inner_students_marks_query } from './join_inner_students_marks';
import { subquery_in_where_query } from './subquery_in_where';
import { window_rank_over_query } from './window_rank_over';
import { window_dense_rank_query } from './window_dense_rank';
import { window_rank_comparison_query } from './window_rank_comparison';
import { case_marks_grade_query } from './case_marks_grade';

// All queries in flat structure
const all_queries = [
  // Basic SELECT queries
  select_all_students_query,
  select_all_marks_query,
  select_distinct_grades_query,
  select_specific_columns_query,
  
  // WHERE clause queries
  where_filter_by_grade_query,
  where_high_scoring_query,
  where_multiple_conditions_query,
  where_or_condition_query,
  where_between_query,

  // ORDER BY queries
  order_by_age_query,
  order_by_marks_desc_query,
  order_by_multiple_columns_query,

  // GROUP BY queries
  group_by_grade_query,
  group_by_subject_query,
  group_by_with_count_query,

  // HAVING queries
  having_min_marks_query,
  having_avg_marks_query,

  // JOIN queries
  join_inner_students_marks_query,

  // Subquery examples
  subquery_in_where_query,

  // Window Functions
  window_rank_over_query,
  window_dense_rank_query,
  window_rank_comparison_query,

  // CASE statement examples
  case_marks_grade_query
];

// Get ordered list of queries
export const getOrderedQueries = () => all_queries;