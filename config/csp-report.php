<?php
// Arquivo para receber relatórios de violações de CSP

// Configurações de cabeçalho
header('Content-Type: application/json');

// Diretório para armazenar os logs
$logDir = __DIR__ . '/logs';

// Criar diretório de logs se não existir
if (!file_exists($logDir)) {
    mkdir($logDir, 0755, true);
}

// Nome do arquivo de log
$logFile = $logDir . '/csp-violations.log';

// Obter dados do relatório
$rawData = file_get_contents('php://input');

// Verificar se há dados
if ($rawData) {
    // Decodificar JSON
    $data = json_decode($rawData, true);
    
    // Verificar se a decodificação foi bem-sucedida
    if (json_last_error() === JSON_ERROR_NONE) {
        // Formatar dados para o log
        $logEntry = date('Y-m-d H:i:s') . ' - ' . json_encode($data, JSON_PRETTY_PRINT) . "\n\n";
        
        // Escrever no arquivo de log
        file_put_contents($logFile, $logEntry, FILE_APPEND);
        
        // Responder com sucesso
        http_response_code(204); // No Content
    } else {
        // Erro na decodificação JSON
        http_response_code(400); // Bad Request
        echo json_encode(['error' => 'Invalid JSON data']);
    }
} else {
    // Sem dados recebidos
    http_response_code(400); // Bad Request
    echo json_encode(['error' => 'No data received']);
}