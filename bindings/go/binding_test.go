package tree_sitter_icalendar_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_icalendar "github.com/hyperupcall-experiments/tree-sitter-icalendar/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_icalendar.Language())
	if language == nil {
		t.Errorf("Error loading iCalendar grammar")
	}
}
