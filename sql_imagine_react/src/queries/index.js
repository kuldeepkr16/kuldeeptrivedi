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
import { insert_into_example_query } from './insert_into_example';
import { update_example_query } from './update_example';
import { delete_example_query } from './delete_example';
import { create_table_example_query } from './create_table_example';
import { alter_table_example_query } from './alter_table_example';
import { drop_table_example_query } from './drop_table_example';
import { primary_key_example_query } from './primary_key_example';
import { foreign_key_example_query } from './foreign_key_example';
import { unique_constraint_example_query } from './unique_constraint_example';
import { not_null_constraint_example_query } from './not_null_constraint_example';
import { check_constraint_example_query } from './check_constraint_example';
import { create_index_example_query } from './create_index_example';
import { unique_index_example_query } from './unique_index_example';
import { transaction_example_query } from './transaction_example';
import { view_example_query } from './view_example';
import { materialized_view_example_query } from './materialized_view_example';
import { stored_procedure_example_query } from './stored_procedure_example';
import { function_example_query } from './function_example';
import { table_valued_function_example_query } from './table_valued_function_example';
import { trigger_example_query } from './trigger_example';
import { permissions_example_query } from './permissions_example';
import { explain_analyze_example_query } from './explain_analyze_example';
import { optimizing_query_example_query } from './optimizing_query_example';
import { query_execution_order_example_query } from './query_execution_order_example';
import { temporary_table_example_query } from './temporary_table_example';
import { json_functions_example_query } from './json_functions_example';
import { array_functions_example_query } from './array_functions_example';
import { recursive_cte_example_query } from './recursive_cte_example';
import { error_handling_example_query } from './error_handling_example';
import { query_optimization_example_query } from './query_optimization_example';
import { advanced_index_example_query } from './advanced_index_example';
import { advanced_permissions_example_query } from './advanced_permissions_example';
import { advanced_error_handling_example_query } from './advanced_error_handling_example';
import { advanced_data_types_example_query } from './advanced_data_types_example';
import { advanced_query_optimization_example_query } from './advanced_query_optimization_example';
import { advanced_window_functions_example_query } from './advanced_window_functions_example';
import { advanced_cte_example_query } from './advanced_cte_example';

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
  case_marks_grade_query,

  // INSERT INTO example
  insert_into_example_query,

  // UPDATE example
  update_example_query,

  // DELETE example
  delete_example_query,

  // CREATE TABLE example
  create_table_example_query,

  // ALTER TABLE example
  alter_table_example_query,

  // DROP TABLE example
  drop_table_example_query,

  // PRIMARY KEY example
  primary_key_example_query,

  // FOREIGN KEY example
  foreign_key_example_query,

  // UNIQUE constraint example
  unique_constraint_example_query,

  // NOT NULL constraint example
  not_null_constraint_example_query,

  // CHECK constraint example
  check_constraint_example_query,

  // CREATE INDEX example
  create_index_example_query,

  // UNIQUE INDEX example
  unique_index_example_query,

  // TRANSACTION example
  transaction_example_query,

  // VIEW example
  view_example_query,

  // MATERIALIZED VIEW example
  materialized_view_example_query,

  // STORED PROCEDURE example
  stored_procedure_example_query,

  // FUNCTION example
  function_example_query,

  // TABLE-VALUED FUNCTION example
  table_valued_function_example_query,

  // TRIGGER example
  trigger_example_query,

  // PERMISSIONS example
  permissions_example_query,

  // EXPLAIN/ANALYZE example
  explain_analyze_example_query,

  // OPTIMIZING QUERIES example
  optimizing_query_example_query,

  // QUERY EXECUTION ORDER example
  query_execution_order_example_query,

  // TEMPORARY TABLE example
  temporary_table_example_query,

  // JSON FUNCTIONS example
  json_functions_example_query,

  // ARRAY FUNCTIONS example
  array_functions_example_query,

  // RECURSIVE CTE example
  recursive_cte_example_query,

  // ERROR HANDLING example
  error_handling_example_query,

  // QUERY OPTIMIZATION example
  query_optimization_example_query,

  // ADVANCED INDEX example
  advanced_index_example_query,

  // ADVANCED PERMISSIONS example
  advanced_permissions_example_query,

  // ADVANCED ERROR HANDLING example
  advanced_error_handling_example_query,

  // ADVANCED DATA TYPES example
  advanced_data_types_example_query,

  // ADVANCED QUERY OPTIMIZATION example
  advanced_query_optimization_example_query,

  // ADVANCED WINDOW FUNCTIONS example
  advanced_window_functions_example_query,

  // ADVANCED CTE example
  advanced_cte_example_query
];

// Get ordered list of queries
export const getOrderedQueries = () => all_queries;