package main

import (
	"context"

	"google.golang.org/api/option"
	"google.golang.org/protobuf/proto"
)

func DetectLanguage(text string) (string, error) {
	ctx := context.Background()
	client, err := translate.NewTranslationClient(ctx, option.WithAPIKey("YOAUTH_API_KEY"))
	if err != nil {
		return "", err
	}
	defer client.Close()
	req := &translate.DetectLanguageTextRequest{
		Text: []string{text},
	}
	resp, err := client.DetectLanguage(ctx, req)
	if err != nil {
		return "", err
	}
	return resp.Language, nil
}

func TranslateText(srcLang, targetLang string, text string) (string, error) {
	ctx := context.Background()
	client, err := translate.NewTranslationClient(ctx, option.WithAPIKey("YAUTH_API_KEY"))
	if err != nil {
		return "", err
	}
	defer client.Close()
	req := &translate.TranslateTextRequest{
		SourceLanguage: srcLang,
		TargetLanguage: targetLang,
		Q:              []string{text},
	}
	resp, err := client.TranslateText(ctx, req)
	if err != nil {
		return "", err
	}
	return proto.UnmarshalText(resp.Detections[0].TranslatedText)[0], nil
}
